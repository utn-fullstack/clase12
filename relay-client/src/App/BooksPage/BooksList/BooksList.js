import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from 'App/environment';
import { Row } from 'react-bootstrap';
import LoadingSpinner from 'Common/LoadingSpinner';
import ErrorAlert from 'Common/ErrorAlert';
import BooksListItem from './BooksListItem';

const bookListQuery = graphql`
  query BooksListQuery($categoryId: String, $count: Int!, $cursor: String) {
    books(first: $count, categoryId: $categoryId, after: $cursor) {
      edges {
        node {
          ...BooksListItem_book
        }
      }
    }
  }
`;

const BooksListRenderer = ({ books, match }) =>
  <QueryRenderer
    environment={environment}
    query={bookListQuery}
    variables={{
      categoryId: match && match.params.id,
      count: 12
    }}
    render={({ error, props }) => {
      if (error)
        return (
          <Row>
            <ErrorAlert error={error} />
          </Row>
        );

      if (props)
        return (
          <Row>
            {props.books.edges.map((edge, key) => <BooksListItem key={key} book={edge.node} />)}
          </Row>
        );

      return (
        <Row>
          <LoadingSpinner />
        </Row>
      );
    }}
  />;

export default BooksListRenderer;
