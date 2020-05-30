import { createStore, applyMiddleware, combineReducers } from "redux";
import { booksReducer, libraryReducer } from "./reducers";
import thunk from "redux-thunk";
import { logger } from "./logger";
import createSagaMiddleware from "redux-saga";
import { put, takeEvery } from "redux-saga/effects";
import { helloSaga } from "./../sagas/sagas";

var finalReducer = combineReducers({ booksReducer, libraryReducer });

var sagaMiddleWare = createSagaMiddleware();

export const store = createStore(
  finalReducer,
  applyMiddleware(thunk, logger, sagaMiddleWare)
);

sagaMiddleWare.run(helloSaga);

const action = (type) => store.dispatch({ type });
