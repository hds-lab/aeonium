import * as React from 'react'
import { Container, Divider, Menu } from 'semantic-ui-react'

import { IAppStoreProps } from '../stores/appStore'

export interface IFooterProps extends IAppStoreProps {

}

interface IFooterState {

}

export class Footer extends React.Component<IFooterProps, IFooterState> {
    public render() {

        return (
            <Container>
                <Divider />
                <Menu fluid widths={3}>
                    <Menu.Item name='Dataset Name' />
                    <Menu.Item name='Percent Agreement' />
                    <Menu.Item name='Labeling Progress' />
                </Menu>
            </Container>
        );
    }
};
