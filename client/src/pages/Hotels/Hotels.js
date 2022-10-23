import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import HotelCard from '../Shared/HotelCard/HotelCard';

const Hotels = () => {
  const hotels = useLoaderData();
  return (
    <Container>
      <Row className='mt-4'>
        <Col lg={7}>
          <h3 className='mb-3'>
            {hotels[0].hotel_location}: {hotels.length} Hotels Found
          </h3>

          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </Col>
        <Col lg={5}>
          <iframe
            title='map'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3737468.5968594695!2d89.17176367308655!3d23.823161765695563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1666527644050!5m2!1sen!2sbd'
            height='500'
            style={{ border: '0' }}
            allowfullscreen=''
            loading='lazy'
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
};
export default Hotels;
