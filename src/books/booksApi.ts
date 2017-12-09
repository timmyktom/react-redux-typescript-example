import { ajax } from 'jquery';

import { Book } from './bookModel';

class BooksApi {

    getBooks(): Promise<Book[]> {
        //tslint:disable
        return new Promise(function (resolve, reject) {
            ajax({
                type: 'GET',
                url: 'assets/data/books.json',
            })
                .done((result: Book[]) => {
                    resolve(Object.assign([], result));
                })
                .fail(() => { reject(); });
        });
    }
}

export const booksApi = new BooksApi();