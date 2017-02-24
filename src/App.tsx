import * as React from 'react'
// import * as ReactDOM from 'react-dom'
// import {observable} from 'mobx'
// import {observer} from 'mobx-react'
// import DevTools from 'mobx-react-devtools'


import { Header } from './components/Header'
import { Main } from './components/Main'
import { Footer } from './components/Footer'
import { AppStore } from './stores/appStore'

var storeInstance = new AppStore(12345, "http://localhost:8000/");

export class App extends React.Component<void, void> {
    render() {
        return (
            <div>
              <Header store={storeInstance} />
              <Main store={storeInstance}/>
              <Footer store={storeInstance} />
            </div>
        );
    }
};

