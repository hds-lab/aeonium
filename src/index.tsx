import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import DevTools from 'mobx-react-devtools';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import configureStore from './stores/configureStore';

import { App } from './App';

const routeStore = configureStore(null);
const history = syncHistoryWithStore(browserHistory, routeStore);

// const appRoot = (AppComponent: typeof App) => {
//     return (
//         <div>
//             <AppComponent />
//             <DevTools />
//         </div>
//     );
// };

// const rootElement = document.getElementById('root');

// ReactDOM.render(appRoot(App), rootElement);

ReactDOM.render(
    <AppContainer>
        <App routeStore={routeStore} history={history} />
    </AppContainer>,
    document.getElementById('root')
);

// if (module.hot) {
//     // module.hot.accept();
//     module.hot.accept("./App", () => {
//         const NextApp = require<{ App: typeof App }>("./App").App;
//         ReactDOM.render(appRoot(NextApp), rootElement);
//     });
// }

if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require<{ App: typeof App }>("./App").App;
        ReactDOM.render(
            <AppContainer>
                <NextApp routeStore={routeStore} history={history} />
            </AppContainer>,
            document.getElementById('root')
        );
    });
}
