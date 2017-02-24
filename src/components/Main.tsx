import * as React from 'react'
import { Container, Grid, Menu } from 'semantic-ui-react'

import { IAppStoreProps } from '../stores/appStore'
import { Overview } from './Overview'
import { Coding } from './Coding'

export interface IMainProps extends IAppStoreProps {
}

interface IMainState {
  activeItem: string
}

export class Main extends React.Component<IMainProps, IMainState> {

    constructor(props: IMainProps) {
        super(props)
        this.state = {activeItem: 'Overview'}
        this.handleItemClick = this.handleItemClick.bind(this)
    }

    handleItemClick = (e, {name}) => {
      console.log(e)
      this.setState({ activeItem: name })
    }

    public render() {
        const mainStyle = {
            height: '450px',
            background: 'lightsteelblue',
            margin: '50px 0px 50px 0px'
        }

        const { activeItem } = this.state

        return (
            <Container>
              <div style={mainStyle}>
                <Grid>
                  <Grid.Column width={4}>
                    <Menu fluid vertical tabular>
                      <Menu.Item name='Overview' active={activeItem === 'Overview'} onClick = {this.handleItemClick}/>
                      <Menu.Item name='Coding' active={activeItem === 'Coding'} onClick = {this.handleItemClick} />
                      <Menu.Item name='Features' active={activeItem === 'Features'} onClick = {this.handleItemClick} />
                      <Menu.Item name='Disagreement' active={activeItem === 'Disagreement'} onClick = {this.handleItemClick}/>
                    </Menu>
                  </Grid.Column>

                  <Grid.Column stretched width={12}>
                    <Overview store={this.props.store} active={activeItem}/>
                    <Coding store={this.props.store} active={activeItem}/>
                    <div hidden={activeItem != 'Features'}>
                      This content matches the tab: Features.
                    </div>
                    <div hidden={activeItem != 'Disagreement'}>
                      This content matches the tab: Disagreement.
                    </div>
                  </Grid.Column>
                </Grid>
              </div>
            </Container>
        )
    }
}
