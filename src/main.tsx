import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
// import { BrowserRouter } from 'react-router-dom';
// import { App } from './App';
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import { Layout } from './components/Layout/Layout';
// import { Graphi } from './components/pages/Graphi';
// import { SignUp } from './components/pages/SignUp';
// import { PageNotFound } from './components/pages/PageNotFound';
import { ErrorBoundary } from './components/ErrorBoundary';
import './index.scss';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     errorElement: <PageNotFound />,
//     children: [
//       {
//         path: 'graphiql',
//         element: <Graphi />,
//       },
//       {
//         path: 'signup',
//         element: <SignUp />,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
