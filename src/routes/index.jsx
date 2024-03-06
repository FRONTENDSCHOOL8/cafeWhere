import LoginPage from '@/pages/LoginPage/LoginPage';
import Preparing from '@/pages/Preparing/Preparing';
import { createBrowserRouter } from 'react-router-dom';
import navigationItems from './navigation';
import RootLayout from '@/pages/RootLayout/RootLayout';

const routes = [
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Preparing />,
    children: navigationItems,
  },
];

let router = createBrowserRouter(routes);

export default router;
