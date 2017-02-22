import * as React from 'react'
import { Container, Segment, Grid, Menu } from 'semantic-ui-react'

interface IContentProps {
}

interface IContentState {
}

export class Main extends React.Component<IContentProps, IContentState> {
    state = { activeItem : 'Overview'}

    constructor(props: IContentProps) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this)
    }

    handleItemClick(e, {name}) {
      console.log(e.target.attributes)
      console.log(name)
      this.setState({ activeItem: name })
    }

    public render() {
        const mainStyle = {
            height: '300px',
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
                    <Segment>
                      This is content.
                    </Segment>
                  </Grid.Column>
                </Grid>
              </div>
            </Container>
        )
    }
}
