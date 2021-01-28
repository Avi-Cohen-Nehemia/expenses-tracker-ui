import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from './reducer';
import persistState from "redux-localstorage";
import initialState from './initialState';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk), persistState())
);

export default store;
