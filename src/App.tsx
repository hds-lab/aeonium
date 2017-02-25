import * as React from 'react';
import { Component } from 'react';
// import * as ReactDOM from 'react-dom';
// import {observable} from 'mobx';
// import {observer} from 'mobx-react';
// import DevTools from 'mobx-react-devtools';

import { IAppStoreProps } from './stores/appStore'

import { Header } from './components/Header'
import { Main } from './components/Main'
import { Footer } from './components/Footer'
import { AppStore } from './stores/appStore'

export interface IAppProps extends IAppStoreProps {
}

interface IAppState {
}


var storeInstance = new AppStore(12345, "http://localhost:8000/");

export default class App extends Component<IAppProps, IAppState> {
    render() {
        return (
            <div>
              <Header store={storeInstance} />
              <Main store={storeInstance} children={this.props.children} />
              <Main store={storeInstance}/>
              <Footer store={storeInstance} />
            </div>
        );
    }
};

