import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import {observable} from 'mobx';
// import {observer} from 'mobx-react';
// import DevTools from 'mobx-react-devtools';

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
                <img src={require('url-loader?limit=10000!../../static/images/aeonium.png')} alt={'}aeonium-logo'} />
                <header>Aeonium</header>
            </div>
        );
     }
};

