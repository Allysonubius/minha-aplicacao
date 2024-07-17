import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppRoutes from './App';
import { ItemsProvider } from './pages/ItemsContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ItemsProvider>
      <AppRoutes/>
    </ItemsProvider>
  </React.StrictMode>
);

reportWebVitals();
