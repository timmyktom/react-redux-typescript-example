import { Observable } from 'rxjs/Rx';
import { Epic } from 'redux-observable';

import { carsApi } from './carsApi';
import * as fromCarAction from './carsActions';

//tslint:disable
export const getCarsEpic:Epic<any,any> = action$ =>
    action$.ofType(fromCarAction.GET_CARS)
    .mergeMap(action =>
        carsApi.getCars()
            .then(cars => fromCarAction.getCarsSuccess(cars))
            .catch(error => Observable.of(fromCarAction.getCarsError(error)))
    );
