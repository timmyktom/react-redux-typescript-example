import * as React from 'react';

import { Book } from '../bookModel';

export interface BookDetailsProps {
  data: Book;
}

function BookDetails(props: BookDetailsProps) {
  const { data } = props;

  return (
    <div>
      {data.id !== -1 ? 
      <div className="container">
        <h3>Selected Book details</h3>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-3">
              <img src={process.env.PUBLIC_URL + '/assets/' + data.image} />
          </div>
            <div className="col-xs-12 col-sm-6 col-md-9">
              <div>
                <label>Name : </label>
                <span>{data.name}</span>
              </div>
              <div>
                <label>Author : </label>
                <span>{data.author}</span>
              </div>
              <div>
                <label>Price : </label>
                <span>{data.price}</span>
              </div>
              <div>
                <label>Details : </label>
                <span>{data.detail}</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <h3>Reviews</h3>
              <table className="table table-responsive table-striped table-hover">
                <thead>
                  <tr>
                    <th>Rating</th>
                    <th>Author</th>
                    <th>Date</th>
                    <th>Title</th>
                    <th>Comment</th>
                  </tr>
                </thead>
                <tbody>
                  {data.reviews.map(review =>
                    <tr key={review.author}>
                      <td>
                        {review.rating}
                      </td>
                      <td>
                        {review.author}
                      </td>
                      <td>
                        {review.date}
                      </td>
                      <td>
                        {review.title}
                      </td>
                      <td>
                        {review.comment}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
          </div>
        </div>
    </div > : null}
    </div>
  );
}
export default BookDetails;