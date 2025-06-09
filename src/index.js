import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import reportWebVitals from './reportWebVitals';

import { CartProvider } from './context/CartContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="user" element={<UserPage />} />
              <Route path="product/:id" element={<ProductDetailPage />} />
              <Route path="t-shirts" element={<ProductPage category="T-Shirt" />} />
              <Route path="hoodies" element={<ProductPage category="Hoodie" />} />
              <Route path="sweatshirts" element={<ProductPage category="Sweatshirt" />} />
              <Route path="sweatpants" element={<ProductPage category="Sweatpant" />} />
              <Route path="accessories" element={<ProductPage category="Accessory" />} />
              <Route path="cart" element={<CartPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();