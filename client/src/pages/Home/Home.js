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

        <Row className='my-5'>
          <Col lg={4} className='py-5 px-4 bg-light'>
            <h4>Why Booking BD?</h4>
            <p className='fs-14'>
              Sit cum illum, minus odio vel quae totam nostrum possimus repellendus nam ratione dolores nisi vitae
              deserunt maiores? Sunt amet mollitia ratione itaque exercitationem enim expedita dolor nemo illum, autem
              possimus quas eveniet vero culpa illo.
            </p>
          </Col>
          <Col lg={4} className='py-5 px-4 bg-light'>
            <h4>Book Local Hotels</h4>
            <p className='fs-14'>
              Sit cum illum, minus odio vel quae totam nostrum possimus repellendus nam ratione dolores nisi vitae
              deserunt maiores? Sunt amet mollitia ratione itaque exercitationem enim expedita dolor nemo illum, autem
              possimus quas eveniet vero culpa illo.
            </p>
          </Col>
          <Col lg={4} className='py-5 px-4 bg-light'>
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
