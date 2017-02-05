import * as React from 'react';

import { IAppStoreProps } from '../stores/appStore'

export interface IOverviewProps extends IAppStoreProps {

}

interface IOverviewState {

}

export class  Overview extends React.Component<IOverviewProps, IOverviewState> {
    public render() {
        return (
            <header>Aeonium Overview</header>
        );
    }
};
