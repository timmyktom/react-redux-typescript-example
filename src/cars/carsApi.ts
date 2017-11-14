import { ajax } from 'jquery';

import { Car } from './carModel';

class CarsApi {

    getCars(): Promise<Car[]> {
        return new Promise(function (resolve, reject) {
            ajax({
                type: "GET",
                url: "assets/data/cars.json",
            })
                .done((result: Car[]) => {
                    resolve(Object.assign([], result));
                })
                .fail(() => { reject(); });
        });
    }
}

export const carsApi = new CarsApi();

