import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom";

import "@fontsource/inter";

// Supports weights 400-700
import "@fontsource/libre-baskerville/400.css";
import '@fontsource/libre-baskerville/700.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
