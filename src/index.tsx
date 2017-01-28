import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import {observable} from 'mobx';
// import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { App } from './App';



// @observer
class AppRoot extends React.Component<void, void> {
    render() {
        return (
            <App />
        );
}
};

ReactDOM.render(<AppRoot />, document.getElementById('root'));
