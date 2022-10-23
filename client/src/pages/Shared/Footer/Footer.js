import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className='bg-dark text-white p-4'>
      <Container>
        <Row>
          <Col lg={4}>
            <h4>bookingbd.com</h4>
            <p className='m-0 fs-14'>
              Booking, Property Booking, Hotels Booking, Resorts Booking, Tourist Spots, Travel Information, Travel
              Planning, Buy Ticket everything of Travel & Tourism.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Footer;
