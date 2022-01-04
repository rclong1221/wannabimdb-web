import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Auth from './components/auth';
import { CookiesProvider } from 'react-cookie';

function Router(){
  return (
    <React.StrictMode>
      <CookiesProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Auth />} />
            <Route exact path="/movies" element={<App />} />
          </Routes>
        </BrowserRouter>
      </CookiesProvider>
    </React.StrictMode>
  );
}

ReactDOM.render(
  <Router />,
  document.getElementById('root')
);