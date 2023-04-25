import axios from 'axios';
import { Product, NewProduct } from '../types/Product';
import { Category } from '../types/Category';

const API_BASE_URL = 'http://localhost:3001/apis';

export async function fetchProducts(): Promise<Product[]> {
  const response = await axios.get(`${API_BASE_URL}/products`);
  return response.data;
}

export async function fetchCategories(): Promise<Category[]> {
  const response = await axios.get(`${API_BASE_URL}/categories`);
  return response.data;
}

export async function createProduct(newProduct: NewProduct): Promise<Product> {
  const response = await axios.post(`${API_BASE_URL}/products`, newProduct);
  return response.data;
}

export async function deleteProduct(productId: number): Promise<void> {
  await axios.delete(`${API_BASE_URL}/products/${productId}`);
}

export async function fetchProductById(productId: number): Promise<Product> {
    const response = await axios.get(`${API_BASE_URL}/products/${productId}`);
    return response.data;
}