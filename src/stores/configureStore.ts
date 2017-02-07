import { createStore } from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
    if (typeof initialState === 'undefined') {
        console.log("undefined initialState");
    }

    const store = createStore(
        rootReducer,
        initialState
    );

    return store;
}
