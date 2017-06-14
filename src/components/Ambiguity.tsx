import * as React from 'react';
import * as Highcharts from 'highcharts';

import { IAppStoreProps } from '../stores/appStore'

export interface IAmbiguityProps extends IAppStoreProps {

}

interface IAmbiguityState {

}

export default class Ambiguity extends React.Component<IAmbiguityProps, IAmbiguityState> {

    constructor(props: IAmbiguityProps) {
        super(props);
        this._getMessageCodes = this._getMessageCodes.bind(this)
    }

    private _getMessageCodes(message_id) {
        return this.props.store.messageCodesStore.getMessageCodes(message_id)
    }

    //add the highcharts script to the page
    componentWillMount() {
        const script = document.createElement("script");

        script.src = "https://code.highcharts.com/highcharts.js";
        script.async = true;

        document.body.appendChild(script);

        const script2 = document.createElement("script");
        script2.src = "https://code.highcharts.com/modules/exporting.js";
        script.async = true;
        document.body.appendChild(script2);
    }

    componentDidMount() {
        this._getMessageCodes(100)
        this.makeChart()
    }

    private makeChart() {

        this._getMessageCodes(100).then((value: Axios.AxiosXHR<{}>) => {
                //TODO: incorporate the real data in the chart
                console.log(value.data)
            })
            .catch((error) => {
                console.log(error);
            });

        Highcharts.chart('container', {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Story Code Comparisons'
            },
            xAxis: {
                categories: ['Story1', 'Story2', 'Story3', 'Story4', 'Story5']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Aggregated Codes'
                }
            },
            legend: {
                reversed: true
            },
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
            series: [{
                name: 'uncodable',
                data: [5, 3, 4, 7, 2]
            }, {
                name: 'well-written',
                data: [2, 2, 3, 2, 1]
            }, {
                name: 'average-written',
                data: [3, 4, 4, 2, 5]
            }, {
                name: 'poorly written',
                data: [3, 4, 4, 2, 5]
            }]
        });
    }

    public render() {

        const containerStyle = {
            minWidth: '310px',
            maxWidth: '800px',
            height: '400px',
            margin: '0 auto'
        }

        return (
            <div id="container" style={containerStyle}></div>
        );
    }
};
