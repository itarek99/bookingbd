import { Carousel } from 'react-bootstrap';
const carouselStyle = { height: '60vh', objectFit: 'cover', filter: 'brightness(70%)', objectPosition: '50% 70%' };

const HomeCarousel = () => {
  return (
    <Carousel interval={3000} fade>
      <Carousel.Item>
        <img
          style={carouselStyle}
          className='d-block w-100'
          src='https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
          alt='First slide'
        />
        <Carousel.Caption>
          <h2>Cox's Bazar</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={carouselStyle}
          className='d-block w-100'
          src='https://images.unsplash.com/photo-1625715490354-9a37e8298bf7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
          alt='Second slide'
        />

        <Carousel.Caption>
          <h2>Srimongol</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={carouselStyle}
          className='d-block w-100'
          src='https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
          alt='Third slide'
        />

        <Carousel.Caption>
          <h2>Sundarban</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;
