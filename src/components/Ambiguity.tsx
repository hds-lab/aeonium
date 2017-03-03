import * as React from 'react'
import { Grid, Header, Checkbox, Segment } from 'semantic-ui-react'
import { IAppStoreProps } from '../stores/appStore'

export interface IAmbiguityProps extends IAppStoreProps {

}

interface IAmbiguityState {

}

export default class Ambiguity extends React.Component<IAmbiguityProps, IAmbiguityState> {
    public render() {
        return (
            <div>
                <Header>Controls</Header>
                <Grid columns={2}>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Segment>
                                <Header as='h5'>View Option</Header>
                                    Box View
                                    List View
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Segment>
                                <Header as='h5'>
                                    FILTERS
                                </Header>
                                <Grid stackable={true} columns={2}>
                                    <Grid.Column>
                                        <Checkbox label='Labeled'/> 
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Checkbox label='Commented'/>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Checkbox label='Disagreed'/> 
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Checkbox label='Ambiguous'/>
                                    </Grid.Column>
                                </Grid>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Header as='h4'>List View</Header>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
};
