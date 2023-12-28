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
// import { LangContext } from './context/lang';
// import { useContext } from 'react';
import { LangState } from './context/lang';
// import { LangState } from '../src/context/lang';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: (
          <LangState>
            <Welcome translate={translate} />
          </LangState>
        ),
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
  // const {
  //   dispathc: { translate },
  // } = useContext(LangContext);
  return (
    <>
      {/* <LangState> */}
      <RouterProvider router={router} />
      {/* </LangState> */}
    </>
  );
}
