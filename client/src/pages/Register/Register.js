import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name });
        console.log(user);
      })
      .catch((err) => console.error(err));
  };

  return (
    <Container className='my-4' style={{ minHeight: '80vh' }}>
      <div className=' mx-auto' style={{ maxWidth: '500px' }}>
        <Form onSubmit={handleRegister}>
          <Form.Group className='mb-3' controlId='formBasicName'>
            <Form.Label>Name</Form.Label>
            <Form.Control type='text' name='name' placeholder='Name' required />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' name='email' placeholder='Enter email' required />
          </Form.Group>

          <Form.Group className='mb-1' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' name='password' placeholder='Password' required />
          </Form.Group>
          <div className='mb-3'>
            <Link className='fs-14' to='/register'>
              already have an account?
            </Link>
          </div>

          <Button className='rounded-0' variant='info' type='submit'>
            Submit
          </Button>
        </Form>

        <h5 className='text-center my-3'>OR</h5>
        <Button className='w-100 rounded-0 py-2 mb-3'>Register With Google</Button>
        <Button className='w-100 rounded-0 py-2'>Register With Github</Button>
      </div>
    </Container>
  );
};
export default Register;
