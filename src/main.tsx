import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';

import theme from './theme';
import App from './App.tsx';

import 'bootstrap-icons/font/bootstrap-icons.css';
import './theme/index.css';
import './theme/custom.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
