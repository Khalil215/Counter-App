import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
import {Context} from './components/Context'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HelmetProvider>
    <React.StrictMode>
      <Context>
        <App />
      </Context>
    </React.StrictMode>
  </HelmetProvider>

);

