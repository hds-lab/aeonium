import * as React from 'react';

import { IAppStoreProps } from '../stores/appStore'

export interface IAmbiguityProps extends IAppStoreProps {

}

interface IAmbiguityState {

}

export class  Ambiguity extends React.Component<IAmbiguityProps, IAmbiguityState> {
    public render() {
        return (
            <header>Aeonium Ambiguity</header>
        );
    }
};
