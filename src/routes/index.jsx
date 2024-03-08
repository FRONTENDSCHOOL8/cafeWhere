import Preparing from '@/pages/Preparing/Preparing';
import RootLayout from '@/pages/RootLayout/RootLayout';
import { createBrowserRouter } from 'react-router-dom';
import navigationItems from './navigation';

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
