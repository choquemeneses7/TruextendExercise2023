import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, CircularProgress, Typography } from "@material-ui/core";
import { Product } from "../types/Product";
import ProductDetails from "../components/ProductDetails";
import { fetchProductById } from "../services/api";

const ProductDetailsPage = () => {
    const { productId } = useParams<{ productId: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                let id:number  = productId ? parseInt(productId) : 0
                const response = await fetchProductById(id);
                setProduct(response);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProduct();
    }, [productId]);
        
    return (
        <Box m={4}>
            {isLoading ? (
            <Box display="flex" justifyContent="center">
            <CircularProgress data-testid="loader" />
            </Box>
            ) : product ? (
                <ProductDetails product={product} />
        ) : (
        <Typography variant="h4">Product not found.</Typography>
        )}
        </Box>
        );
        };
        
        export default ProductDetailsPage;
       
