import * as React from 'react';

import { IAppStoreProps } from '../stores/appStore'

export interface IHeaderProps extends IAppStoreProps {

}

interface IHeaderState {

}


// @observer
export class Header extends React.Component<IHeaderProps, IHeaderState> {
    public render() {
        return (
            <div>
                <img src={require<string>('url-loader?limit=10000!../../static/images/aeonium.png')} alt={'aeonium-logo'} />
                <header>Aeonium</header>
            </div>
        );
    }
};

