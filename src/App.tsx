import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Graphi } from './components/Graphi';
import { Layout } from './components/Layout/Layout';
import { PageNotFound } from './pages/PageNotFound';
import { Welcome } from './pages/Welcome';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Reset } from './components/Reset';
import { Dashboard } from './components/Dashboard';
import { AuthGuard } from './components/AuthGuard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <Welcome />,
      },
      {
        path: 'graphiql',
        element: <Graphi />,
      },
      {
        path: 'login',
        element: (
          <AuthGuard redirectLink="/">
            <Login />
          </AuthGuard>
        ),
      },
      {
        path: 'register',
        element: (
          <AuthGuard redirectLink="/">
            <Register />
          </AuthGuard>
        ),
      },
      {
        path: 'reset',
        element: (
          <AuthGuard redirectLink="/">
            <Reset />
          </AuthGuard>
        ),
      },
      {
        path: 'logout',
        element: <Dashboard />,
      },
    ],
  },
]);

export function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
