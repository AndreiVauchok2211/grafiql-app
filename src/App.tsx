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
import { LangContext } from './context/lang';
import { useContext } from 'react';

export function App() {
  const {
    dispathc: { translate },
  } = useContext(LangContext);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <PageNotFound />,
      children: [
        {
          index: true,
          element: <Welcome translate={translate} />,
        },
        {
          path: 'graphiql',
          element: (
            <AuthGuard redirectLink="/">
              <Graphi translate={translate} />
            </AuthGuard>
          ),
        },
        {
          path: 'login',
          element: <Login translate={translate} />,
        },
        {
          path: 'register',
          element: <Register translate={translate} />,
        },
        {
          path: 'reset',
          element: <Reset translate={translate} />,
        },
        {
          path: 'logout',
          element: <Dashboard translate={translate} />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
