import React from 'react';
import { Col, Table } from 'react-bootstrap';
import { QueryRenderer, graphql } from 'react-relay';
import environment from 'App/environment';
import LoadingSpinner from 'Common/LoadingSpinner';
import ErrorAlert from 'Common/ErrorAlert';
import BookRow from './BookRow';

const BooksTable = ({ books }) =>
  <Col md={12}>
    <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Author</th>
          <th>Author</th>
        </tr>
      </thead>
      <tbody>
        {books.edges.map(item => <BookRow book={item.node} />)}
      </tbody>
    </Table>
  </Col>;

// QueryRenderer

const adminPageQuery = graphql`
  query AdminPageQuery($categoryId: String, $count: Int!, $cursor: String) {
    books(first: $count, categoryId: $categoryId, after: $cursor) {
      edges {
        node {
          ...BookRow_book
        }
      }
    }
  }
`;

const AdminPageRenderer = ({ books, match }) =>
  <QueryRenderer
    environment={environment}
    query={adminPageQuery}
    variables={{
      categoryId: match && match.params.id,
      count: 12
    }}
    render={({ error, props }) => {
      if (error) return <ErrorAlert error={error} />;

      if (props) return <BooksTable {...props} />;

      return <LoadingSpinner />;
    }}
  />;

export default AdminPageRenderer;
