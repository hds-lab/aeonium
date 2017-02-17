import * as React from 'react';
import { Menu, Segment, Grid } from 'semantic-ui-react';
import { observer } from 'mobx-react';

import { IAppStoreProps } from '../stores/appStore'

export interface IContentProps extends IAppStoreProps {
}

interface IContentState {
    activeItem: string
}

@observer
export class Content extends React.Component<IContentProps, IContentState> {
    constructor(props: IContentProps) {
        super(props);
        this.state = { activeItem: 'overview' };
    }

    // _handleItemClick = (name: string) => this.setState({ activeItem: name })


    // private _handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    private _handleItemClick(newStateName: string): void {
        this.setState({ activeItem: newStateName });
    }

    public render() {
        return (
            <div>
                <Grid>
                    <Grid.Column width={2}>
                        <Menu fluid vertical tabular>
                            <Menu.Item name='overview' active={this.state.activeItem === 'overview'} onClick={this._handleItemClick.bind(this, 'overview')} />
                            <Menu.Item name='coding' active={this.state.activeItem === 'coding'} onClick={this._handleItemClick.bind(this, 'coding')} />
                            <Menu.Item name='features' active={this.state.activeItem === 'features'} onClick={this._handleItemClick.bind(this, 'features')} />
                            <Menu.Item name='disagreement' active={this.state.activeItem === 'disagreement'} onClick={this._handleItemClick.bind(this, 'disagreement')} />
                        </Menu>
                    </Grid.Column>

                    <Grid.Column stretched width={14}>
                        <Segment>
                            {React.Children.map(this.props.children, (child: React.ReactElement<any>) => React.cloneElement(child, { store: this.props.store }))}
                        </Segment>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
};
