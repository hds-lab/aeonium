import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import {observable} from 'mobx';
// import {observer} from 'mobx-react';
// import DevTools from 'mobx-react-devtools';

import {IAppStoreProps} from '../stores/appStore'

export interface IFooterProps  extends IAppStoreProps {

}

interface IFooterState {

}



export class Footer extends React.Component<IFooterProps, IFooterState> {
    public render() {
        return (
            <header>Footer</header>
        );
     }
};