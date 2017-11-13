import * as React from 'react';

import BooksList from './books-list/BooksList';
import BookDetails from './book-details/BookDetails';
class BooksPage extends React.Component {
  render() {
    return (
      <div>
          <BooksList/>
          <BookDetails/>
      </div>
    );
  }
}

export default BooksPage;