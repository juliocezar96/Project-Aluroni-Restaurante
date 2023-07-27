import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import 'normalize.css'
import './index.css';
import Cardapio from './pages/Cardapio';
import i18n from './i18n'; 

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Cardapio />
    </I18nextProvider>
  </React.StrictMode>
);

