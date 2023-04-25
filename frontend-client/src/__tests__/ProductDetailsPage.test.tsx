import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ProductDetailsPage from './../pages/ProductDetailsPage';

describe('ProductDetailsPage', () => {
  const product = {
    id: '123',
    name: 'Laptop',
    category: 'Electronics',
    price: '900',
    image: 'https://sysbol.com/1939-large_default/laptop-hp-14-intel-core-i3-1005g1-4gb-sdram-128gb-ssd-gold.jpg',
  };

  const setup = () => {
    render(
      <MemoryRouter initialEntries={[`/products/${product.id}`]}>
        <Routes>
            <Route path="/products/:productId" element={<ProductDetailsPage/>}/>
        </Routes>
      </MemoryRouter>
    );
  };

  it('should render the product details', () => {
    setup();
    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });
});
