// import { Routes, Route } from 'react-router-dom';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Graphi } from './components/Graphi';
import { SignUp } from './pages/SignUp';
// import { Welcome } from './components/pages/Welcome';
import { Layout } from './components/Layout/Layout';
import { PageNotFound } from './pages/PageNotFound';
import { Welcome } from './pages/Welcome';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Reset } from './components/Reset';
import { Dashboard } from './components/Dashboard';
import { AuthGuard } from './components/AuthGuard';
// import { ErrorBoundary } from './components/ErrorBoundary';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <PageNotFound />,
    children: [
      {
        // path: '/',
        index: true,
        element: <Welcome />,
      },
      {
        path: 'graphiql',
        element: <Graphi />,
      },
      {
        path: 'signup',
        element: <SignUp />,
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
        element: <Register />,
      },
      {
        path: 'reset',
        element: <Reset />,
      },
      {
        path: 'dashboard',
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

// export function App() {
//   return (
//     <>
//       <ErrorBoundary>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Welcome />} />
//             <Route path="graphiql" element={<Graphi />} />
//             <Route path="signup" element={<SignUp />} />
//             <Route path="*" element={<PageNotFound />} />
//           </Route>
//         </Routes>
//       </ErrorBoundary>
//     </>
//   );
// }
