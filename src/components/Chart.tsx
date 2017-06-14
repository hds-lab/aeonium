import * as React from 'react'
import * as d3 from 'd3'
import { observer } from 'mobx-react'
import * as ReactFauxDom from 'react-faux-dom'

import { IAppStoreProps } from '../stores/appStore'

export interface IContentProps extends IAppStoreProps {
}

interface IContentState {
}

/*
* prototype chart to show React rendering a D3 component to DOM
*/

@observer
export class Chart extends React.Component<IContentProps, IContentState> {
    constructor(props: IContentProps) {
        super(props)
        this._makeChart = this._makeChart.bind(this)
    }

    private _makeChart() {
        const { partners } = this.props.store.partnerStore
        const d3data = {
            width: window.screen.availWidth,
            height: window.screen.availHeight,
            data: partners.map((partner) => {
                return partner.username;
            })
        }

        const svgElement = new ReactFauxDom.Element('svg')

        const svg = d3.select(svgElement)
                      .attr('width', d3data.width)
                      .attr('height', d3data.height)

        var elem = svg.selectAll("g")
                    .data(d3data.data)

        var elemEnter = elem.enter()
                        .append("g")
                        .attr("transform", "translate(80,80)")

        elemEnter.append("circle")
                    .attr("r", () => Math.random() * (60-10) + 10)
                    .attr("cx", 100)
                    .attr("cy", (d) => d3data.data.indexOf(d) * 50)
                    .attr("stroke","black")
                    .attr("fill", "white")

        elemEnter.append("text")
                    .text((d) => d)
                    .style("text-anchor", "middle")
                    .attr("x", 100)
                    .attr("y", (d) => d3data.data.indexOf(d) * 50)

        return svgElement.toReact()
    }

    public render() {
        return this._makeChart()
    }
};
