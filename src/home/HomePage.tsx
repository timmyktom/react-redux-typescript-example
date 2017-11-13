import * as React from 'react';

import './HomePage.css';
class HomePage extends React.Component {
  render() {
    return (
      <div className="container">
          <div className="row">
              <h2>Welcome to React - Redux</h2>
          </div>
          <div className="row modules">
            <div className="col-xs-12 col-sm-6 col-md-6" >
                <img src={process.env.PUBLIC_URL + '/assets/icon-books.jpg'}/>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6">
                <img src={process.env.PUBLIC_URL + '/assets/icon-cars.jpg'}/>
            </div>
        </div>
      </div>
    );
  }
}

export default HomePage;