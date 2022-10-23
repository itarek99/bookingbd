import { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };

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
          {user && user.displayName ? (
            <Nav className='ms-auto align-items-center'>
              <Link className='text-white text-decoration-none me-0 me-lg-3 my-2 my-lg-0' to='/profile'>
                {user?.displayName}
              </Link>
              <Button onClick={handleLogOut} className='btn btn-danger rounded-0 '>
                Log Out
              </Button>
            </Nav>
          ) : (
            <Nav className='ms-auto'>
              <Link className='btn btn-info rounded-0 me-0 me-lg-3 my-2 my-lg-0' to='/register'>
                Register
              </Link>
              <Link className='btn btn-info rounded-0 ' to='/login'>
                Log in
              </Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
