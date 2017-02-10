import * as React from 'react';
import { IndexRoute, Route } from 'react-router';

import {NotFound} from '../views/404';
import Overview from '../components/Overview';
import Ambiguity from '../components/Ambiguity';
import Coding from '../components/Coding';
import Features from '../components/Features';
import App from '../App';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Overview} />

    <Route path='/ambiguity' component={Ambiguity} />

    <Route path='/coding' component={Coding} />

    <Route path='/features' component={Features} />

    <Route path='/overview' component={Overview} />

    <Route path='*' component={NotFound} />
  </Route>
);
