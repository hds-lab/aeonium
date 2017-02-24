import * as React from 'react'
import { Segment, Grid, Menu, Button, Header, Checkbox } from 'semantic-ui-react'

import { IAppStoreProps } from '../stores/appStore'

export interface ICodingProps extends IAppStoreProps {
    active: string
}

interface ICodingState {

}

export class Coding extends React.Component<ICodingProps, ICodingState> {
    public render() {
        return (
            <div hidden={this.props.active != 'Coding'}>
                <Grid celled='internally'>
                <Grid.Row>
                    <Grid.Column width={10}>
                    <div height='150px'>
                        <Segment>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                        </Segment>
                    </div>
                    </Grid.Column>
                    <Grid.Column width={6}>
                    <Header as='h4'>DEFINITIONS</Header>
                    <Menu size='tiny' attached='top' tabular>
                        <Menu.Item name='mine' active/>
                        <Menu.Item name='partner'  />
                        <Menu.Item name='master'  />
                    </Menu>
                    <Segment attached='bottom'>
                    </Segment>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column width={10}>
                    <Button size='medium'>
                        Click Here
                    </Button>
                    <Button size='medium'>
                        Click Here
                    </Button>
                    <Button size='medium'>
                        Click Here
                    </Button>
                    <Button size='medium'>
                        Click Here
                    </Button>
                    <Button size='medium'>
                        Click Here
                    </Button>
                    <br/>
                    <Checkbox label="I'm not so sure"/>
                    <Button primary size='medium'>
                        Click Here
                    </Button>
                    <br/>
                    <Header as='h4'>COMMENTS</Header>
                    </Grid.Column>
                    <Grid.Column width={6}>
                    <Header as='h4'>KEYWORDS</Header>
                    <Menu size='tiny' attached='top' tabular>
                        <Menu.Item name='mine' active/>
                        <Menu.Item name='partner'  />
                        <Menu.Item name='system'  />
                    </Menu>
                    <Segment attached='bottom'>
                    </Segment>
                    </Grid.Column>
                </Grid.Row>
                </Grid>
            </div>
        );
    }
}
