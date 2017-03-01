import * as React from 'react'
import { Container, Grid, Menu, Segment } from 'semantic-ui-react'
import { Link } from 'react-router';

import { IAppStoreProps } from '../stores/appStore'

export interface IMainProps extends IAppStoreProps {
}

interface IMainState {
  activeItem: string
}

export class Main extends React.Component<IMainProps, IMainState> {

  constructor(props: IMainProps) {
    super(props);
    this.state = { activeItem: 'Overview' };
    this._handleItemClick = this._handleItemClick.bind(this);
  }

  private _handleItemClick = (e, {name}) => {
    console.log(e)
    console.log("handle click")
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
                <Menu.Item name='Overview' active={activeItem === 'Overview'} as={Link} to='/' onClick={this._handleItemClick} />
                <Menu.Item name='Coding' active={activeItem === 'Coding'} as={Link} to='/coding' onClick={this._handleItemClick} />
                <Menu.Item name='Features' active={activeItem === 'Features'} as={Link} to='/features' onClick={this._handleItemClick} />
                <Menu.Item name='Ambiguity' active={activeItem === 'Ambiguity'} as={Link} to='/ambiguity' onClick={this._handleItemClick} />
              </Menu>
            </Grid.Column>

            <Grid.Column stretched width={12}>
              <Segment>
                {React.Children.map(this.props.children, (child: React.ReactElement<any>) => React.cloneElement(child, { store: this.props.store }))}
              </Segment>
            </Grid.Column>
          </Grid>
        </div>
      </Container>
    )
  }
}
