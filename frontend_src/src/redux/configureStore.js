import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Movies } from './movies';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            movies: Movies
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}
