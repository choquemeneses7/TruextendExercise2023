import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
// import ProductDetailsPage from './pages/ProductDetailsPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/products" element={<ProductListPage/>}/>
          {/* <Route path="/products/:productId" element={<ProductDetailsPage/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
