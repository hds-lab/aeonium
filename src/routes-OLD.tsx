import * as React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Overview from './components/Overview';
import Coding from './components/Coding';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Overview} />
		<Route path="/coding" component={Coding} />
	</Route>
);
