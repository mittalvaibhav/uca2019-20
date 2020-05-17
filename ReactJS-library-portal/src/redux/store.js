import { createStore, applyMiddleware, combineReducers } from 'redux';
import { booksReducer, libraryReducer } from './reducers';
import thunk from 'redux-thunk';
import { logger } from './logger';

var finalReducer = combineReducers({booksReducer, libraryReducer})

export const store = createStore(finalReducer, applyMiddleware(thunk, logger))