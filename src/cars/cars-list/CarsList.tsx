import * as React from 'react';

import './CarsList.css';
class CarsList extends React.Component {
  render() {
    return (
      <div className="container">
        <h3>Cars List</h3>
        <button className="btn" >Show Car details</button>
          <div>
              List will be here
          </div>
      </div>
    );
  }
}

export default CarsList;