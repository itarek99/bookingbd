import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container className='py-1'>
        <Navbar.Brand>
          <Link to='/' className='text-decoration-none text-white fs-4'>
            Booking BD
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ms-auto'>
            <Link className='btn btn-info rounded-0 me-0 me-lg-3 my-2 my-lg-0' to='/register'>
              Register
            </Link>
            <Link className='btn btn-info rounded-0 ' to='/login'>
              Log in
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
