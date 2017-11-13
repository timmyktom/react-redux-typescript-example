import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { booksReducer } from '../books/booksReducer';
import { carsReducer } from '../cars/carsReducer'; 

import * as fromBooks from '../books/booksReducer';
import * as fromCars from '../cars/carsReducer'; 

export interface AppState {
  bookState: fromBooks.BookState;
  carState: fromCars.CarState;
}

export const initialState: AppState = {
  bookState: fromBooks.initialBookState,
  carState: fromCars.initialCarState
};

export const rootReducer = combineReducers({
  booksReducer,
  carsReducer
});

export default function configureStore() {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
}
