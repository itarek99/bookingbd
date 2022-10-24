import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div style={{ height: '100vh' }} className='d-flex justify-content-center align-items-center'>
        <Spinner animation='border' variant='info' />
      </div>
    );
  }

  if (!user) return <Navigate to='/login' state={{ from: location }} replace />;
  return children;
};
export default PrivateRoute;
