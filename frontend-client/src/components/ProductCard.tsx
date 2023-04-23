import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Product } from '../types/Product';

type Props = {
  product: Product;
  onClick: () => void;
};

const ProductCard: React.FC<Props> = ({ product, onClick }) => {
  return (
    <Card sx={{ maxWidth: 345 }} onClick={onClick}>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.category_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${product.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
