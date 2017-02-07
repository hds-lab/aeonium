import * as React from 'react';

import { IAppStoreProps } from '../stores/appStore'

export interface IFeaturesProps extends IAppStoreProps {

}

interface IFeaturesState {

}

export default class Features extends React.Component<IFeaturesProps, IFeaturesState> {
    public render() {
        return (
            <header>Aeonium Features</header>
        );
    }
};
