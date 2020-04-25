import { createStore } from 'redux';
import { booksReducer } from './reducers'

export const store = createStore(booksReducer)