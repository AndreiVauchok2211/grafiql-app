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
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

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
        element: (
          <AuthGuard redirectLink="/">
            <Graphi />
          </AuthGuard>
        ),
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'reset',
        element: <Reset />,
      },
      {
        path: 'logout',
        element: <Dashboard />,
      },
    ],
  },
]);

export function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage('en');
  }, [i18n]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
