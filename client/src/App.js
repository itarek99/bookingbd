import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main/Main';
import Home from './pages/Home/Home';
import Hotels from './pages/Hotels/Hotels';
import Login from './pages/Login/Login';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          loader: async () => fetch('http://localhost:5000/locations'),
          element: <Home />,
        },
        {
          path: '/hotels/:id',
          loader: async ({ params }) => fetch(`http://localhost:5000/hotels/${params.id}`),
          element: <Hotels />,
        },
        {
          path: '/login',
          element: <Login />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
