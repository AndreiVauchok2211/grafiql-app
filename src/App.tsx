import { Routes, Route } from 'react-router-dom';
import { GraphiQL } from './components/pages/GraphiQL';
import { SigUp } from './components/pages/SigUp';
import { Welcome } from './components/pages/Welcome';
import { Loyaut } from './components/loyaut/Loyaut';
import { PageNotFound } from './components/pages/PageNotFound';
import { ErrorBoundary } from './components/ErrorBoundary';

export function App() {
  return (
    <>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Loyaut />}>
            <Route index element={<Welcome />} />
            <Route path="graphiql" element={<GraphiQL />} />
            <Route path="signup" element={<SigUp />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </>
  );
}
