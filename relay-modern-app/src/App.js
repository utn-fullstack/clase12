import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import { Row, Col, Alert } from 'react-bootstrap';
import Book from './Book';
import environment from './environment';
import Spinner from 'react-spinkit';

const query = graphql`
  query AppQuery($bookId: String!) {
    book(id: $bookId) {
      id
      title
      image
      author
    }
  }
`;

const App = () =>
  <QueryRenderer
    environment={environment}
    query={query}
    variables={{
      bookId: 'BK-BJ0jRAM7W'
    }}
    render={({ error, props }) => {
      if (error)
        return (
          <Row>
            <Col md={12}>
              <Alert bsStyle="danger">
                <h4>Error:</h4>
                <p>
                  {error.message}
                </p>
              </Alert>
            </Col>
          </Row>
        );

      if (props) return <Book {...props} />;

      return (
        <Row>
          <Col md={12}>
            <Spinner spinnerName="rotating-plane" />
          </Col>
        </Row>
      );
    }}
  />;

export default App;
