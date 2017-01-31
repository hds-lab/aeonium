import * as React from 'react';
import * as ReactDOM from 'react-dom';
import DevTools from 'mobx-react-devtools';
import { App } from './App';

const appRoot = (AppComponent: typeof App) => {
    return (
        <div>
            <AppComponent />
            <DevTools />
        </div>
    );
};

const rootElement = document.getElementById('root');

ReactDOM.render(appRoot(App), rootElement);

if (module.hot) {
    // module.hot.accept();
    module.hot.accept("./App", () => {
        const NextApp = require<{ App: typeof App }>("./App").App;
        ReactDOM.render(appRoot(NextApp), rootElement);
    });
}
