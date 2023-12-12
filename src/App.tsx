import { Routes, Route } from 'react-router-dom';
import { GraphiQL } from './components/pages/GraphiQL';
import { SignUp } from './components/pages/SignUp';
import { Welcome } from './components/pages/Welcome';
import { Layout } from './components/Layout/Layout';
import { PageNotFound } from './components/pages/PageNotFound';
import { ErrorBoundary } from './components/ErrorBoundary';

export function App() {
  return (
    <>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Welcome />} />
            <Route path="graphiql" element={<GraphiQL />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </>
  );
}
