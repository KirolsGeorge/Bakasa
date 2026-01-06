import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/home';
import Categories from './pages/categories';
import UsersPage from './pages/users';
import RevealPage from './pages/revealPage';
import FinalPage from './pages/finalPage';
import AppLayout from './AppLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <AppLayout />
      </>
    ),
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/categories',
        element: <Categories />,
      },
      {
        path: '/users',
        element: <UsersPage />,
      },
      {
        path: '/RevealPage',
        element: <RevealPage />,
      },
      {
        path: '/FinalPage',
        element: <FinalPage />,
      },
    ],
  },
]);

export default router;
