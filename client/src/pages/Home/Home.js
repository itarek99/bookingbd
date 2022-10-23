import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { Autoplay } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import HomeCarousel from '../Shared/HomeCarousel/HomeCarousel';

const Home = () => {
  const locations = useLoaderData();

  return (
    <div>
      <HomeCarousel />

      <Container className='mt-5'>
        <h1>Explore Bangladesh</h1>

        <Swiper
          className='mt-4'
          breakpoints={{
            480: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 5,
            },
          }}
          autoplay={{ delay: 2000 }}
          loop={true}
          spaceBetween={20}
          modules={[Autoplay]}
        >
          {locations.map((location) => (
            <SwiperSlide className='position-relative rounded-3 overflow-hidden user-select-none' key={location.id}>
              <Link to={`hotels/${location.id}`}>
                <img
                  style={{ height: '300px', width: '100%', objectFit: 'cover' }}
                  src={location.imgURL}
                  alt={location.name}
                />
                <h6 className='text-white p-2 text-center swiper-title'>{location.name}</h6>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <iframe
          className='rounded mt-5'
          title='map'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3737468.5968594695!2d89.17176367308655!3d23.823161765695563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1666527644050!5m2!1sen!2sbd'
          height='400'
          style={{ border: '0', width: '100%' }}
          loading='lazy'
        ></iframe>

        <Row className='my-5'>
          <Col lg={4} className='py-4 py-lg-5 px-4 bg-light'>
            <h4>Why Booking BD?</h4>
            <p className='fs-14'>
              Sit cum illum, minus odio vel quae totam nostrum possimus repellendus nam ratione dolores nisi vitae
              deserunt maiores? Sunt amet mollitia ratione itaque exercitationem enim expedita dolor nemo illum, autem
              possimus quas eveniet vero culpa illo.
            </p>
          </Col>
          <Col lg={4} className='py-4 py-lg-5 px-4 bg-light'>
            <h4>Book Local Hotels</h4>
            <p className='fs-14'>
              Sit cum illum, minus odio vel quae totam nostrum possimus repellendus nam ratione dolores nisi vitae
              deserunt maiores? Sunt amet mollitia ratione itaque exercitationem enim expedita dolor nemo illum, autem
              possimus quas eveniet vero culpa illo.
            </p>
          </Col>

          <Col lg={4} className='py-4 py-lg-5 px-4 bg-light'>
            <h4>Book International Hotels</h4>
            <p className='fs-14'>
              Sit cum illum, minus odio vel quae totam nostrum possimus repellendus nam ratione dolores nisi vitae
              deserunt maiores? Sunt amet mollitia ratione itaque exercitationem enim expedita dolor nemo illum, autem
              possimus quas eveniet vero culpa illo.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Home;
