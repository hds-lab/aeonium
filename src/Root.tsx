import * as React from 'react';
import { Component } from 'react';
import { ReactRouterReduxHistory } from 'react-router-redux'
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from './routes';
// import * as ReactDOM from 'react-dom';
// import {observable} from 'mobx';
// import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import * as Redux from 'redux';
type Store<S> = Redux.Store<S>;

export interface IRootProps {
    routeStore: Store<any>,
    history: ReactRouterReduxHistory
}

interface IRootState {

}

export class Root extends Component<IRootProps, IRootState> {
    render() {
        const { routeStore, history } = this.props;
        return (
            <Provider store={routeStore}>
                <div>
                    <Router history={history} routes={routes} />
                    <DevTools />
                </div>
            </Provider>
        );
    }
};

