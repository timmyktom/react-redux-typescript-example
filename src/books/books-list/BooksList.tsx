import * as React from 'react';

import { Book } from '../bookModel';
import './BooksList.css';

export interface BookListProps {
  booksList: Book[];
  onBookSelect: (event: any) => any;
}

function BooksList(props: BookListProps) {
  const { booksList, onBookSelect} = props;

  const handleBookChange = (e:any) => {
    onBookSelect(Number(e.target.value));
  };

  return (
    <div className="container">
      <h3>Books List</h3>
      <div>
        {
          booksList.length >0 ? 
            <table className="table table-responsive table-striped table-hover">
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>Book Name</th>
                <th>Author</th>
                <th>price</th>
              </tr>
            </thead>
            <tbody>
                {booksList.map(book =>
                  <tr key={book.id}>
                      <td>
                      <input type="radio" name="bookId" value={book.id} onClick={handleBookChange}/>
                      </td>
                      <td>
                        {book.name}
                      </td>
                      <td>
                        {book.author}
                      </td>
                      <td>
                        {book.price}
                      </td>
                  </tr>
                )}
            </tbody>
        </table>:null
        }
      </div >
    </div>
  );
}
export default BooksList;