import { createStore, applyMiddleware, combineReducers } from 'redux';
import { combineEpics, createEpicMiddleware  } from 'redux-observable';
// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { composeWithDevTools } from 'redux-devtools-extension';

import { booksReducer } from '../books/booksReducer';
import { carsReducer } from '../cars/carsReducer'; 

import * as fromBooks from '../books/booksReducer';
import * as fromCars from '../cars/carsReducer'; 

import { getBooksEpic } from '../books/booksEpic';
import { getCarsEpic } from '../cars/carsEpic';

export interface AppState {
  bookState: fromBooks.BookState;
  carState: fromCars.CarState;
}

export const rootEpic = combineEpics(
  getBooksEpic,
  getCarsEpic
);

export const rootReducer = combineReducers({
  booksReducer,
  carsReducer
});

const epicMiddleware = createEpicMiddleware(rootEpic);

export default function configureStore(initialState?: AppState) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(epicMiddleware)
    )
  );
}
