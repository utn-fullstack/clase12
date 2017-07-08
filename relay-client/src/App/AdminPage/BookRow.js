import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { createFragmentContainer, graphql } from 'react-relay';

const BookRow = ({ book }) =>
  <tr key={book.id}>
    <td>
      {book.id}
    </td>
    <td>
      {book.title}
    </td>
    <td>
      {book.author}
    </td>
    <td>
      <ButtonToolbar className="CategoriesList-toolbar">
        <Button bsStyle="info" bsSize="xsmall">
          Edit
        </Button>
        <Button bsStyle="danger" bsSize="xsmall">
          Remove
        </Button>
      </ButtonToolbar>
    </td>
  </tr>;

// FragmentContainer

export default createFragmentContainer(
  BookRow,
  graphql`
    fragment BookRow_book on Book {
      id
      title
      author
      image
    }
  `
);
