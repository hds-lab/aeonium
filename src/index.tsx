import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import DevTools from 'mobx-react-devtools';
import { Router, browserHistory } from 'react-router';
import Routes from './routes';




ReactDOM.render(
    <Router history={browserHistory}>
        {Routes}
    </Router>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept("./routes", () => {
        ReactDOM.render(
            <Router history={browserHistory}>
                {Routes}
            </Router>,
            document.getElementById('root')
        );
    });
}
