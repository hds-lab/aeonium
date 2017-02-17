import * as React from 'react';
import { Menu, Segment, Grid } from 'semantic-ui-react';
import { observer } from 'mobx-react';
import { Link } from 'react-router';

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
                    <Grid.Column width={3}>
                        <Menu fluid vertical pointing>
                            <Menu.Item name='overview' active={this.state.activeItem === 'overview'} as={Link} to='/' onClick={this._handleItemClick.bind(this, 'overview')} />
                            <Menu.Item name='coding' active={this.state.activeItem === 'coding'} as={Link} to='/coding' onClick={this._handleItemClick.bind(this, 'coding')} />
                            <Menu.Item name='features' active={this.state.activeItem === 'features'} as={Link} to='/features' onClick={this._handleItemClick.bind(this, 'features')} />
                            <Menu.Item name='ambiguity' active={this.state.activeItem === 'ambiguity'} as={Link} to='/ambiguity' onClick={this._handleItemClick.bind(this, 'ambiguity')} />
                        </Menu>
                    </Grid.Column>

                    <Grid.Column stretched width={13}>
                        <Segment>
                            {React.Children.map(this.props.children, (child: React.ReactElement<any>) => React.cloneElement(child, { store: this.props.store }))}
                        </Segment>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
};
