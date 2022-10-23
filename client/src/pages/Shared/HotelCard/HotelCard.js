import { Button } from 'react-bootstrap';

const HotelCard = ({ hotel }) => {
  const { details, imgURL, hotel_location } = hotel;

  return (
    <div className='card mb-3'>
      <div className='row g-0'>
        <div className='col-md-4'>
          <img
            style={{ height: '100%', objectFit: 'cover' }}
            src={imgURL}
            className='img-fluid rounded-start'
            alt={hotel.name}
          />
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className='card-title m-0 mb-1'>{hotel.name}</h5>
            <p className='m-0 fw-bold fs-14 mb-2'>{hotel_location}</p>
            <p className='card-text fs-14'>{details}</p>
            <Button className='rounded-1' variant='success'>
              Reserver
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HotelCard;