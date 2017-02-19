import * as React from 'react'
import { Container, Divider } from 'semantic-ui-react'

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
                <header>Footer</header>
            </Container>
        );
    }
};
