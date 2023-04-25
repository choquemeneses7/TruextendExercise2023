import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

function App() {
  return (
    <div className="App">
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductListPage />} />
            <Route path="/products/:productId" element={<ProductDetailsPage />} />
          </Routes>
        </BrowserRouter>
      </I18nextProvider>
    </div>
  );
}

export default App;
