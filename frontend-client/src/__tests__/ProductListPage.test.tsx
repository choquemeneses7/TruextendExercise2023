import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductListPage from '../pages/ProductListPage';

describe('ProductListPage', () => {
  it('renders product list heading', () => {
    render(<ProductListPage />);
    const headingElement = screen.getByText(/All/i);
    expect(headingElement).toBeInTheDocument();
  });

  it('renders create product button', () => {
    render(<ProductListPage />);
    const buttonElement = screen.getByRole('button', { name: /Create/i });
    expect(buttonElement).toBeInTheDocument();
  });
});
