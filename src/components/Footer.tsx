import * as React from 'react';

import { IAppStoreProps } from '../stores/appStore'

export interface IFooterProps extends IAppStoreProps {

}

interface IFooterState {

}

export class Footer extends React.Component<IFooterProps, IFooterState> {
    public render() {
        return (
            <header>Aeonium Footer</header>
        );
    }
};
