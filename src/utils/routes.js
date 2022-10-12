import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home';
import Root from '../components/Root';
import ErrorPage from '../components/ErrorPage';
import About from '../components/About';
import Shop from '../components/Shop';
import { productsAndCartData } from '../loaders/getCart&Data';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: productsAndCartData,
    children: [
      { index: true, element: <Home></Home> },
      { path: '/home', element: <Home></Home> },
      { path: '/shop', element: <Shop></Shop> },
      { path: '/about', element: <About></About> },
    ],
  },
]);

export default router;
