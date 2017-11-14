import * as React from 'react';

import { Car } from '../carModel';
import './CarsList.css';

export interface BookListProps {
  carsList: Car[];
  onCarSelect: (event: any) => any;
}

function CarsList(props: BookListProps) {
  const { carsList, onCarSelect } = props;

  const handleCarChange = (e: any) => {
    onCarSelect(e.target.value);
  };

  return (
    <div className="container">
      <h3>Cars List</h3>
      <div>
        {
          carsList.length > 0 ?
            <table className="table table-responsive table-striped table-hover">
              <thead>
                <tr>
                  <th>&nbsp;</th>
                  <th>Manufacturer</th>
                  <th>Model</th>
                  <th>price</th>
                </tr> 
              </thead>
              <tbody>
                {carsList.map(car =>
                  <tr key={car.model}>
                    <td>
                      <input type="radio" name="carId" value={car.model} onClick={handleCarChange} />
                    </td>
                    <td>
                      {car.manufacturer}
                    </td>
                    <td>
                      {car.model}
                    </td>
                    <td>
                      {car.price}
                    </td>
                  </tr>
                )}
              </tbody>
            </table> : null
        }
      </div >
    </div>
  );
}
export default CarsList;