import * as React from 'react';
import { Car } from '../carModel';

export interface CarDetailsProps {
  data: Car;
}

function CarDetails(props: CarDetailsProps) {
  const { data } = props;

  return (
    <div>
      {data.model !== '' ?
        <div className="container">
            <h3>Selected Car details</h3>
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-3">
                <img src={process.env.PUBLIC_URL + '/assets/' + data.image} />
              </div>
                <div className="col-xs-12 col-sm-6 col-md-9">
                  <div>
                    <label>Manufacturer : </label>
                    <span>{data.manufacturer}</span>
                  </div>
                  <div>
                    <label>Model : </label>
                    <span>{data.model}</span>
                  </div>
                  <div>
                    <label>Price : </label>
                    <span>{data.price}</span>
                  </div>
                  <div>
                    <label>More about : </label>
                    <a href={data.wiki}><span>{data.wiki}</span></a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-4 col-md-4">
                  <h3>Features rating</h3>
                  <table className="table table-responsive table-striped table-hover">
                    <thead>
                      <tr>
                        <th>Feature</th>
                        <th>Rating</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.quality.map(feature =>
                      <tr key={feature.name}>
                            <td>
                              {feature.name}
                            </td>
                            <td>
                              {feature.rating}
                            </td>
                      </tr>
                      )}
                  </tbody>
              </table>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-8">
                &nbsp;
          </div>
            </div>
    </div>
      : null}
    </div>
  );
}
export default CarDetails;