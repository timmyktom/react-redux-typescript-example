import * as React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
  NavLink
} from 'react-router-dom';

import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import { getBooks } from './books/booksActions';
import { getCars } from './cars/carsActions';
import HomePage from './home/HomePage';
import BooksContainer from './books/BooksContainer';
import CarsContainer from './cars/CarsContainer';

import './App.css';
const logo = require('./logo.svg');
const reduxlogo = require('./redux-logo.svg');

const store = configureStore();
store.dispatch(getBooks());
store.dispatch(getCars());

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="left">
            <img src={logo} className="App-logo" alt="React Logo" />
            <h1>React</h1>
          </div>
          <ul>
              <li className="left">
                  <Router>
                    <NavLink to="/home" replace>Home</NavLink>
                  </Router>
              </li>
              <li className="left">
              <Router>
                  <NavLink to="/books" replace>Books</NavLink>
              </Router>
              </li>
              <li className="left">
              <Router>
                  <NavLink to="/cars" replace>Cars</NavLink>
              </Router>
              </li>
          </ul>
          <div className="right">
            <img src={reduxlogo} className="App-logo" alt="Redux Logo" />
            <h1>Redux</h1>
          </div>
        </div>
        <div className="App-body">
        <Provider store={store}>
          <Router>
            <Switch>
              <Redirect exact from="/" to="/home"/>
              <Route path="/home" component={HomePage} />
              <Route path="/books" component={BooksContainer} />
              <Route path="/cars" component={CarsContainer} />
            </Switch>
          </Router>
        </Provider>
        </div>
      </div>
    );
  }
}

export default App;
