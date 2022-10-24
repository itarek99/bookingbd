import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const Hotel = () => {
  const { imgURL, name, details, hotel_location } = useLoaderData();

  return (
    <Container className='my-5'>
      <Row>
        <Col lg={6}>
          <Card>
            <Card.Img variant='top' src={imgURL} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{hotel_location}</Card.Text>
              <Card.Text>{details}</Card.Text>
              <Link to='/confirmation'>Confirm Reserve</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Hotel;
