import { createStore } from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initialState: any) {
    const store = createStore(
        rootReducer,
        initialState
    );

    return store;
}
