import { Car } from './carModel';

export const GET_CARS = 'GET_CARS';
export const GET_CARS_SUCCESS = 'GET_CARS_SUCCESS';
export const GET_CARS_ERROR = 'GET_CARS_ERROR';
export const GET_CAR_DETAILS = 'GET_CAR_DETAILS';

export type GET_CARS = typeof GET_CARS;
export type GET_CARS_SUCCESS = typeof GET_CARS_SUCCESS;
export type GET_CARS_ERROR = typeof GET_CARS_ERROR;
export type GET_CAR_DETAILS = typeof GET_CAR_DETAILS;

export interface GetCars {
    type: GET_CARS;
}

export interface GetCarsSuccess {
    type: GET_CARS_SUCCESS;
    cars: Car[];
}

export interface GetCarsError {
    type: GET_CARS_ERROR;
    error: {};
}

export interface GetCarDetails {
    type: GET_CAR_DETAILS;
    id: string;
}

export type CarsAction = GetCars | GetCarsSuccess | GetCarsError | GetCarDetails;

export function getCars() {
    return {type: GET_CARS};
}

export function getCarsSuccess(cars: Car[]): GetCarsSuccess {
    return {type: GET_CARS_SUCCESS, cars};
}

export function getCarsError(error: {}): GetCarsError {
    return { type: GET_CARS_ERROR, error};
}
  
export function getCarDetails(id: string): GetCarDetails {
    return {type: GET_CAR_DETAILS, id};
}