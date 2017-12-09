import { connect, Dispatch  } from 'react-redux';
import * as fromBookAction from './booksActions';
import BooksComponent from './BooksComponent';

//tslint:disable
function mapStateToProps(state: any) {
  return {
    books: state.booksReducer.bookList,
    bookDetails: state.booksReducer.selectedBook
  };
}

function mapDispatchToProps(dispatch: Dispatch<fromBookAction.BooksAction>) {
  return {
    onBookSelected: (id: number) => { 
      dispatch(fromBookAction.getBookDetails(id)); 
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(BooksComponent);