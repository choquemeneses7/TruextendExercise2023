import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, CircularProgress, Typography } from "@material-ui/core";
import { Product } from "../types/Product";
import ProductDetails from "../components/ProductDetails";
import { fetchProductById } from "../services/api";
import ErrorHandler from './../components/ErrorHandler';
import { useTranslation } from 'react-i18next';

const ProductDetailsPage = () => {
    const { productId } = useParams<{ productId: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    const { t } = useTranslation();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                let id: number = productId ? parseInt(productId) : 0
                const response = await fetchProductById(id);
                setProduct(response);
                setIsLoading(false);
            } catch (error) {
                setError(error as Error);
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
                <Typography variant="h4">{t('productDetailsPageNotFound')}</Typography>
            )}
            <ErrorHandler error={error}></ErrorHandler>
        </Box>
    );
};

export default ProductDetailsPage;

