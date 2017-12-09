import * as React from 'react';

import CarsList from './cars-list/CarsList';
import CarDetails from './car-details/CarDetails';
import { Car } from './carModel';

export interface Props {
  cars: Car[];
  carDetails: Car;
  //tslint:disable
  onCarSelected: (event: any) => any;
}

function CarsComponent(props: Props) {
  const { cars, carDetails, onCarSelected } = props;

  const onCarSelect = function (carModel: string) {
    onCarSelected(carModel);
  };
  return (
    <div>
      <CarsList carsList={cars} onCarSelect={onCarSelect} />
      <CarDetails data={carDetails} />
    </div>
  );
}

export default CarsComponent;