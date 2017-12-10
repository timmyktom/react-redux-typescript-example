import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { booksReducer } from '../books/booksReducer';
import { carsReducer } from '../cars/carsReducer'; 

import * as fromBooks from '../books/booksReducer';
import * as fromCars from '../cars/carsReducer'; 

export interface AppState {
  bookState: fromBooks.BookState;
  carState: fromCars.CarState;
}

// export const initialState: AppState = {
//   bookState: fromBooks.initialBookState,
//   carState: fromCars.initialCarState
// };

export const rootReducer = combineReducers({
  booksReducer,
  carsReducer
});

export default function configureStore(initialState?: AppState) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(thunk, reduxImmutableStateInvariant())
    )
  );
}
