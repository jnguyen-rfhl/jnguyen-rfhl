import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { VITE_PROD } from './constants';

const root = createRoot(document.getElementById('root')!);

if (VITE_PROD) {
  root.render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>,
  );
} else {
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
}
