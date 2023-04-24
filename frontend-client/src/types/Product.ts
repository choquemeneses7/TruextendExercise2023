export interface Product {
    id: number;
    name: string;
    category_name: string;
    image: string;
    price: number;
  }
  
  export interface NewProduct {
    name: string;
    category_id: number;
    image: string;
    price: number;
  }
  