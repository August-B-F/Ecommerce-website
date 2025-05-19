import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App';
import User from './userUI/User';
import RtShirts from './itemPages/T-shirts';
import Rhoodies from './itemPages/Hoodies';
import Rsweatpants from './itemPages/Sweatpants';
import Rsweatshirts from './itemPages/Sweatshirts';
import Raccessories from './itemPages/Accessores';
import Rcart from './userUI/Cart';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="user" element={<User />} />
      <Route path="t-shirts" element={<RtShirts />} />
      <Route path="hoodies" element={<Rhoodies />} />
      <Route path="sweatpants" element={<Rsweatpants />} />
      <Route path="sweatshirts" element={<Rsweatshirts />} />
      <Route path="accessories" element={<Raccessories />} />
      <Route path="cart" element={<Rcart />} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
