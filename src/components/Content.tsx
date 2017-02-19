import * as React from 'react'
import * as d3 from 'd3'
import { observer } from 'mobx-react'
import { Button, List, ListItem} from 'semantic-ui-react'

import { IAppStoreProps } from '../stores/appStore'

export interface IContentProps extends IAppStoreProps {
}

interface IContentState {
}

@observer
export class Content extends React.Component<IContentProps, IContentState> {
    constructor(props: IContentProps) {
        super(props);
        this._getPartners = this._getPartners.bind(this)
    }

    private _getPartners() {
        this.props.store.partnerStore.getPartners()
    }

    // prototype bit to show d3 directly changing the DOM
    public componentDidUpdate() {
        d3.selectAll("div")
            .attr("class", "item")
            .style("color", function() {
                return "hsl(" + Math.random() * 360 + ",100%,50%)";
            })
    }

    public render() {

        const {count, doubleCount } = this.props.store
        const { partners } = this.props.store.partnerStore

        // inline css for styling at component level
        const countStyle = {
            padding: '5px',
            color: 'red',
            backgroundColor: 'gray'
        }

        const increase = () => this.props.store.increase(1)

        const partnerItems = partners.map((partner, i) => {
            return (
                <ListItem key={i}>{partner.username}</ListItem>
            );
        }
        )

        return (
            <div>
                <div>
                    <span style={countStyle}>{count}</span>
                    <Button onClick={increase}>Increase by 1</Button>
                    <span style={{ padding: '5px', color: 'blue' }}>{doubleCount}</span>
                    <Button>Decrease by 1</Button>
                </div>

                <div>
                    <Button onClick={this._getPartners}>Get Partners</Button>
                    <List>{partnerItems}</List>
                </div>
            </div>
        )
    }
};
