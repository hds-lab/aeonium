import * as React from 'react';
import { Component } from 'react';
import { ReactRouterReduxHistory } from 'react-router-redux'
import { Provider, ProviderProps } from 'react-redux';
import { Router } from 'react-router';
import routes from './routes';
// import * as ReactDOM from 'react-dom';
// import {observable} from 'mobx';
// import {observer} from 'mobx-react';
// import DevTools from 'mobx-react-devtools';

import { IAppStoreProps } from './stores/appStore'

import { Content } from './components/Content'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { AppStore } from './stores/appStore'

export interface IAppProps extends IAppStoreProps {
    routeStore: ProviderProps,
    history: ReactRouterReduxHistory
}

interface IAppState {

}


var appStoreInstance = new AppStore(12345, "http://localhost:8000/");

export class App extends Component<IAppProps, IAppState> {
    render() {
        const { routeStore, history } = this.props;
        return (
            <Provider store={routeStore}>
                <div>
                    <Router history={history} routes={routes} />
                    <Header store={appStoreInstance} />
                    <Content store={appStoreInstance} />
                    <Footer store={appStoreInstance} />
                </div>
            </Provider>
        );
    }
};

