import { Box, Button, Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Product } from "../types/Product";

type Props = {
  product: Product;
};

const ProductDetails = ({ product }: Props) => {
  console.log(product)
  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h4">{product.name}</Typography>
        <Typography variant="h6">Price: {product.price}€</Typography>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" mb={4}>
        <Card style={{ maxWidth: "600px" }}>
          <CardMedia component="img" image={product.image} alt={product.name} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {product.category_name}
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box display="flex" justifyContent="flex-end">
        <Button variant="contained" color="primary" component={Link} to="/products">
          Back to products
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;
