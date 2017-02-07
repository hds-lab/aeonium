import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import session from './session';

const rootReducer = combineReducers({
   routing: routerReducer,
   session
});

export default rootReducer;
