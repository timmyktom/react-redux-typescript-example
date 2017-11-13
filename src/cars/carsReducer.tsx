import * as fromCarAction from './carsActions';
import { Car, defaultCar } from './carModel';

export interface CarState {
    carList: Car[];
    isCarListLoaded: boolean;
    selectedCar: Car;
}

export const initialCarState: CarState = {
    carList: [],
    isCarListLoaded: false,
    selectedCar: defaultCar
};

export function carsReducer(state: CarState = initialCarState, action: fromCarAction.CarsAction): CarState {
    let newState: CarState;
    switch (action.type) {
        case fromCarAction.GET_CARS_SUCCESS:
            newState = Object.assign({}, state);
            newState.carList = action.cars;
            newState.isCarListLoaded = true;
            return newState;
        case fromCarAction.GET_CAR_DETAILS:
            newState = Object.assign({}, state);
            newState.selectedCar = getCarDetails(state.carList, action.id);
            return newState;
        default:
            return state;
    }
}

function getCarDetails (carList: Car[], carModel: string): Car {
    return carList.find(car => car.model === carModel) as Car;
}