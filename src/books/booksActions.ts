import { Book } from './bookModel';

export const GET_BOOKS = 'GET_BOOKS';
export const GET_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS';
export const GET_BOOKS_ERROR = 'GET_BOOKS_ERROR';
export const GET_BOOK_DETAILS = 'GET_BOOK_DETAILS';

export type GET_BOOKS = typeof GET_BOOKS;
export type GET_BOOKS_SUCCESS = typeof GET_BOOKS_SUCCESS;
export type GET_BOOKS_ERROR = typeof GET_BOOKS_ERROR;
export type GET_BOOK_DETAILS = typeof GET_BOOK_DETAILS;

export interface GetBooks {
    type: GET_BOOKS;
}

export interface GetBooksSuccess {
    type: GET_BOOKS_SUCCESS;
    books: Book[];
}

export interface GetBooksError {
    type: GET_BOOKS_ERROR;
    error: {};
}

export interface GetBookDetails {
    type: GET_BOOK_DETAILS;
    id: number;
}

export type BooksAction = GetBooks | GetBooksSuccess | GetBooksError | GetBookDetails;

export function getBooks() {
    return {type: GET_BOOKS};
}
  
export function getBooksSuccess(books: Book[]): GetBooksSuccess {
    return {type: GET_BOOKS_SUCCESS, books};
}

export function getBooksError(error: {}): GetBooksError {
    return { type: GET_BOOKS_ERROR, error};
}
  
export function getBookDetails(id: number): GetBookDetails {
    return {type: GET_BOOK_DETAILS, id};
}