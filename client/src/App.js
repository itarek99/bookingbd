import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main/Main';
import Confirmation from './pages/Confirmation/Confirmation';
import Home from './pages/Home/Home';
import Hotel from './pages/Hotel/Hotel/Hotel';
import Hotels from './pages/Hotels/Hotels';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import PrivateRoute from './routes/PrivateRoute/PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          loader: async () => fetch('https://bookingbd-server.vercel.app/locations'),
          element: <Home />,
        },
        {
          path: '/hotels/:id',
          loader: async ({ params }) => fetch(`https://bookingbd-server.vercel.app/hotels/${params.id}`),
          element: <Hotels />,
        },
        {
          path: '/hotel/:id',
          loader: async ({ params }) => fetch(`https://bookingbd-server.vercel.app/hotel/${params.id}`),
          element: <Hotel />,
        },
        {
          path: '/confirmation',
          element: (
            <PrivateRoute>
              <Confirmation />
            </PrivateRoute>
          ),
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/register',
          element: <Register />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
