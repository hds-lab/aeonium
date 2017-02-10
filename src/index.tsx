import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import DevTools from 'mobx-react-devtools';
import { Router, browserHistory } from 'react-router';
import Routes from './routes';
// import { syncHistoryWithStore } from 'react-router-redux';
// import { AppContainer } from 'react-hot-loader';
// import { routerReducer as routing } from 'react-router-redux';
// import configureStore from './stores/configureStore';



ReactDOM.render(
    <Router history={browserHistory}>
        {Routes}
    </Router>,
    document.getElementById('root')
);

// import { Root } from './Root';

// const routeStore = configureStore({});
// const history = syncHistoryWithStore(browserHistory, routeStore);

// ReactDOM.render(
//     <AppContainer>
//         <Root routeStore={routeStore} history={history} />
//     </AppContainer>,
//     document.getElementById('root')
// );


// if (module.hot) {
//     module.hot.accept('./Root', () => {
//         const NextRoot = require<{ Root: typeof Root }>("./Root").Root;
//         ReactDOM.render(
//             <AppContainer>
//                 <NextRoot routeStore={routeStore} history={history} />
//             </AppContainer>,
//             document.getElementById('root')
//         );
//     });
// }
