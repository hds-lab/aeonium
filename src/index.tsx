import * as React from 'react';
import * as ReactDOM from 'react-dom';
import DevTools from 'mobx-react-devtools';
import { App } from './App';

class AppRoot extends React.Component<void, void> {
    render() {
        return (
            <div>
                <App />
                <DevTools />
            </div>
        );
    }
};

ReactDOM.render(<AppRoot />, document.getElementById('root'));
