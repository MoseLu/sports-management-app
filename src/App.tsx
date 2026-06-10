import {
  createBrowserRouter,
  createHashRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';

import MainLayout from '@/layouts/MainLayout';
import ErrorNotFound from '@/pages/ErrorNotFound';
import IndexPage from '@/pages/IndexPage';

// Hash router is the safest default for the Capacitor Android WebView,
// which has no static file server backing deep links. Set
// VITE_USE_BROWSER_ROUTER=1 to switch to createBrowserRouter for the
// Web-only deployment.
const useBrowserRouter = import.meta.env.VITE_USE_BROWSER_ROUTER === '1';

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <IndexPage /> },
      { path: 'home', element: <Navigate to="/" replace /> },
    ],
  },
  {
    path: '*',
    element: <MainLayout />,
    children: [{ path: '*', element: <ErrorNotFound /> }],
  },
];

const router = useBrowserRouter
  ? createBrowserRouter(routes)
  : createHashRouter(routes);

export default function App() {
  return <RouterProvider router={router} />;
}
