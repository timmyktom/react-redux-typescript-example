import * as React from 'react';

import BooksList from './books-list/BooksList';
import BookDetails from './book-details/BookDetails';
import { Book } from './bookModel';

export interface Props {
  books: Book[];
  bookDetails: Book;
  //tslint:disable
  onBookSelected: (event: any) => any;
}

function BooksComponent(props: Props) {
    const { books, bookDetails, onBookSelected } = props;

    const onBookSelect = function(bookId: number)
    {
        onBookSelected(bookId);
    };
    return (
        <div>
            <BooksList booksList={books} onBookSelect={onBookSelect}/>
            <BookDetails data={bookDetails}/>
        </div>
    );
}

export default BooksComponent;