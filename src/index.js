import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { MantineProvider } from '@mantine/core';
import SettingsProvider from './Context/Settings/Settings';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <SettingsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SettingsProvider>
    </MantineProvider>
  </React.StrictMode>
);
