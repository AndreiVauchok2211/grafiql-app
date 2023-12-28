import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { ErrorBoundary } from './components/ErrorBoundary';
import './index.scss';
import { LangState } from '../src/context/lang';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <LangState>
        <App />
      </LangState>
    </ErrorBoundary>
  </React.StrictMode>
);
