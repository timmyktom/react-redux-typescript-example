import * as React from 'react';

import CarsList from './cars-list/CarsList';
import CarDetails from './car-details/CarDetails';
class CarsPage extends React.Component {
  render() {
    return (
      <div>
          <CarsList/>
          <CarDetails/>
      </div>
    );
  }
}

export default CarsPage;