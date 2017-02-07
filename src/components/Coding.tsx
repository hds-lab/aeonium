import * as React from 'react';

import { IAppStoreProps } from '../stores/appStore'

export interface ICodingProps extends IAppStoreProps {

}

interface ICodingState {

}

export default class Coding extends React.Component<ICodingProps, ICodingState> {
    public render() {
        return (
            <header>Aeonium Coding</header>
        );
    }
};
