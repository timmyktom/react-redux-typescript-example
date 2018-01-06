import { Observable } from 'rxjs/Rx';
import { Epic } from 'redux-observable';

import { booksApi } from './booksApi';
import * as fromBookAction from './booksActions';

//tslint:disable
export const getBooksEpic:Epic<any,any> = action$ =>
    action$.ofType(fromBookAction.GET_BOOKS)
    .mergeMap(action =>
        booksApi.getBooks()
            .then(books => fromBookAction.getBooksSuccess(books))
            .catch(error => Observable.of(fromBookAction.getBooksError(error)))
    );
