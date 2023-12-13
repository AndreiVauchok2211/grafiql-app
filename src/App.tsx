// import { Routes, Route } from 'react-router-dom';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Graphi } from './components/pages/Graphi';
import { SignUp } from './components/pages/SignUp';
// import { Welcome } from './components/pages/Welcome';
import { Layout } from './components/Layout/Layout';
import { PageNotFound } from './components/pages/PageNotFound';
import { Welcome } from './components/pages/Welcome';
// import { ErrorBoundary } from './components/ErrorBoundary';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: '/',
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
