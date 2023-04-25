import React, { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Product } from "../types/Product";
import { Category } from "../types/Category";
import ProductCard from "../components/ProductCard";
import { fetchProducts, fetchCategories } from "../services/api";
import { Box, CircularProgress, Grid, Button, Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import CreateProductForm from "../components/CreateProductForm";
import './ProductListPage.css'

const ProductListPage = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isFormOpen, setIsFormOpen] = useState(false);

    useEffect(() => {
        fetchProductsData();
        fetchCategoriesData();
    }, []);

    async function fetchProductsData() {
        const productList = await fetchProducts();
        productList ? setProducts(productList) : setProducts([]);
        setIsLoading(false);
    }

    async function fetchCategoriesData() {
        const categoryList = await fetchCategories();
        categoryList ? setCategories(categoryList) : setCategories([]);
    }


    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabIndex(newValue);
    };

    const getProductsByCategory = (category: string) => {
        if (category === "All") {
            return products;
        } else {
            return products.length > 0 ? products.filter((product) => product.category_name === category) : products;
        }
    };

    const renderProductCards = (category: string) => {
        const categoryProducts = getProductsByCategory(category);
        if (isLoading) {
            return <CircularProgress />;
        } else if (categoryProducts.length === 0) {
            return <p>No products found.</p>;
        } else {
            return categoryProducts.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4}>
                    <ProductCard key={product.id} product={product} onDelete={handleOnCreateProduct}/>
                </Grid>
            ));
        }
    };

    const handleFormOpen = () => {
        setIsFormOpen(true);
    };

    const handleFormClose = () => {
        setIsFormOpen(false);
    };

    const handleOnCreateProduct = () => {
        fetchProductsData();
        fetchCategoriesData();
        handleFormClose();
    };

    return (
        <div className='product-list'>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12}>
                    <Tabs
                        value={tabIndex}
                        onChange={handleTabChange}
                        aria-label="Product categories"
                    >
                        {categories ? (categories.map((category, index) => (
                            <Tab
                                key={category.id}
                                label={category.name}
                                value={index}
                                id={`category-tab-${index}`}
                                aria-controls={`category-tabpanel-${index}`}
                            />
                        ))) : <></>}
                        <Tab
                            key="all-products-tab"
                            label="All"
                            value={categories ? categories.length : 0}
                            id={`all-products-tab`}
                            aria-controls={`all-products-tabpanel`}
                        />
                    </Tabs>
                </Grid>
                <div className="create-button">
                    <Button id="create" variant="contained" color="primary" onClick={handleFormOpen}>
                            Create
                    </Button>
                </div>
            </Grid>
            <Dialog open={isFormOpen} onClose={handleFormClose}>
                <DialogTitle>Create New Product</DialogTitle>
                <DialogContent>
                    <CreateProductForm categories={categories} onCreate={handleOnCreateProduct} />
                </DialogContent>
            </Dialog>
            <Box >
                {categories ? categories.map((category, index) => (
                    <div
                        className="category-products-tab"
                        key={`category-tabpanel-${index}`}
                        role="tabpanel"
                        hidden={tabIndex !== index}
                        id={`category-tabpanel-${index}`}
                        aria-labelledby={`category-tab-${index}`}
                    >
                        <Grid container spacing={2}>
                            {renderProductCards(category.name)}
                        </Grid>

                    </div>
                )) : <></>}
                <div
                    className="all-products-tab"
                    key={`all-products-tabpanel`}
                    role="tabpanel"
                    hidden={tabIndex !== (categories ? categories.length : 0)}
                    id={`all-products-tabpanel`}
                    aria-labelledby={`all-products-tab`}
                    style={{ minWidth: '200px' }}
                >
                    <Grid 
                        container
                        alignItems="center"
                        justifyContent="center"
                        spacing={2} >
                        {renderProductCards("All")}
                    </Grid>
                </div>
            </Box>
        </div>
    );
};

export default ProductListPage;
