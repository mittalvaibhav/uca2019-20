import { createStore } from 'redux';
import { libraryReducer } from './redux/reducers';

export const store = createStore(libraryReducer);