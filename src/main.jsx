import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { UserProvider } from './context/index';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
