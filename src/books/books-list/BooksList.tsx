import * as React from 'react';

import './BooksList.css';
class BooksList extends React.Component {
  render() {
    return (
      <div className="container">
        <h3>Books List</h3>
        <button className="btn" >Show Book details</button>
          <div>
              List will be here
          </div>
      </div>
    );
  }
}

export default BooksList;