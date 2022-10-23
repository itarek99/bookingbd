import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {
  const { loginWithEmailPassword } = useContext(AuthContext);

  const handleLoginWithEmailPassword = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginWithEmailPassword(email, password)
      .then(() => {})
      .catch((err) => console.error(err));
  };

  return (
    <Container style={{ minHeight: '80vh' }}>
      <div className='mx-auto' style={{ maxWidth: '500px' }}>
        <Form onSubmit={handleLoginWithEmailPassword} className='mt-5'>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' name='email' placeholder='Enter email' />
          </Form.Group>

          <Form.Group className='mb-1' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' name='password' placeholder='Password' />
          </Form.Group>
          <div className='mb-3'>
            <Link className='fs-14' to='/register'>
              don't have an account?
            </Link>
          </div>

          <Button className='rounded-0' variant='info' type='submit'>
            Submit
          </Button>
        </Form>

        <h5 className='text-center my-4'>OR</h5>
        <Button className='w-100 rounded-0 py-2 mb-3'>Login With Google</Button>
        <Button className='w-100 rounded-0 py-2'>Login With Github</Button>
      </div>
    </Container>
  );
};
export default Login;
