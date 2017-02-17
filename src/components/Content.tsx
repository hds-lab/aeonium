import * as React from 'react';
import { Menu, Segment } from 'semantic-ui-react';
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


    private _handleItemClick(newStateName: string): void {
        this.setState({ activeItem: newStateName });
    }

    public render() {
        return (
            <div>
                <Menu pointing vertical>
                    <Menu.Item name='overview' active={this.state.activeItem === 'overview'} onClick={this._handleItemClick.bind(this, 'overview')} />
                    <Menu.Item name='coding' active={this.state.activeItem === 'coding'} onClick={this._handleItemClick.bind(this, 'coding')} />
                    <Menu.Item name='features' active={this.state.activeItem === 'features'} onClick={this._handleItemClick.bind(this, 'features')} />
                    <Menu.Item name='disagreement' active={this.state.activeItem === 'disagreement'} onClick={this._handleItemClick.bind(this, 'disagreement')} />
                </Menu>

                <Segment>
                    {React.Children.map(this.props.children, (child: React.ReactElement<any>) => React.cloneElement(child, { store: this.props.store }))}
                </Segment>
            </div>
        );
    }
};
