import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const Book = ({ book }) =>
  <Row>
    <Col md={4}>
      <Image src={book.image} rounded responsive />
    </Col>
    <Col md={8}>
      <h2>
        {book.title}
      </h2>
      <p>
        By: {book.author}
      </p>
    </Col>
  </Row>;

export default Book;
