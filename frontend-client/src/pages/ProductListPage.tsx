import React, { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Product } from "../types/Product";
import { Category } from "../types/Category";
import ProductCard from "../components/ProductCard";
import { fetchProducts, fetchCategories } from "../services/api";

// type Props = {
//   categories: Category[];
// };

const ProductListPage = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchProductsData() {
      const productList = await fetchProducts();
      setProducts(productList);
    }

    async function fetchCategoriesData() {
        const categoryList = await fetchCategories();
        setCategories(categoryList);
    }

    fetchProductsData();
    fetchCategoriesData();
  }, []);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  const getProductsByCategory = (category: string) => {
    if (category === "All") {
      return products;
    } else {
      return products.filter((product) => product.category_name === category);
    }
  };

  const renderProductCards = (category: string) => {
    const categoryProducts = getProductsByCategory(category);
    if (categoryProducts.length === 0) {
      return <p>No products found.</p>;
    } else {
      return categoryProducts.map((product) => (
        <ProductCard key={product.id} product={product} onClick={() => {}} />
      ));
    }
  };

  return (
    <div className='product-list'>
      <Tabs
        value={tabIndex}
        onChange={handleTabChange}
        aria-label="Product categories"
      >
        {categories.map((category, index) => (
          <Tab
            key={category.id}
            label={category.name}
            value={index}
            id={`category-tab-${index}`}
            aria-controls={`category-tabpanel-${index}`}
          />
        ))}
        <Tab
          key="all-products-tab"
          label="All"
          value={categories.length}
          id={`all-products-tab`}
          aria-controls={`all-products-tabpanel`}
        />
      </Tabs>
      {categories.map((category, index) => (
        <div
          key={`category-tabpanel-${index}`}
          role="tabpanel"
          hidden={tabIndex !== index}
          id={`category-tabpanel-${index}`}
          aria-labelledby={`category-tab-${index}`}
        >
          {renderProductCards(category.name)}
        </div>
      ))}
      <div
        key={`all-products-tabpanel`}
        role="tabpanel"
        hidden={tabIndex !== categories.length}
        id={`all-products-tabpanel`}
        aria-labelledby={`all-products-tab`}
      >
        {renderProductCards("All")}
      </div>
    </div>
  );
};

export default ProductListPage;
