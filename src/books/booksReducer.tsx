import * as fromBookAction from './booksActions';
import { Book, defaultBook } from './bookModel';

export interface BookState {
    bookList: Book[];
    isBookListLoaded: boolean;
    selectedBook: Book;
}

export const initialBookState: BookState = {
    bookList: [],
    isBookListLoaded: false,
    selectedBook: defaultBook
};

export function booksReducer(state: BookState = initialBookState, action: fromBookAction.BooksAction): BookState {
    let newState: BookState;
    switch (action.type) {
        case fromBookAction.GET_BOOKS_SUCCESS:
            newState = Object.assign({}, state);
            newState.bookList = action.books;
            newState.isBookListLoaded = true;
            return newState;
        case fromBookAction.GET_BOOK_DETAILS:
            newState = Object.assign({}, state);
            newState.selectedBook = getBookDetails(state.bookList, action.id);
            return newState;
        default:
            return state;
    }
  }

function getBookDetails (bookList: Book[], bookId: number): Book {
    return bookList.find(book => book.id === bookId) as Book;
}