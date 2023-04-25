import { Card, CardActionArea, CardContent, CardMedia, Grid, makeStyles, Typography, CardActions, Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@material-ui/core";
import { Product } from "../types/Product";
import { useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import React, { useState } from "react";
import { deleteProduct } from "../services/api";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

type Props = {
    product: Product;
    onDelete: () => void;
};

const ProductCard = ({ product, onDelete }: Props) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [isCancelDialogOpen, setIsCancelDialogOpen] = useState(false);
    const [productIdToDelete, setProductIdToDelete] = useState(0);

    const handleClick = () => {
        navigate(`/products/${product.id}`);
    };

    async function deleteProductById() {
        await deleteProduct(productIdToDelete);
        setIsCancelDialogOpen(false);
        setProductIdToDelete(0);
        onDelete();
    }

    const handleCancelDialogOpen = (productId:number) => {
        setIsCancelDialogOpen(true);
        setProductIdToDelete(productId);
    };

    const handleCancelDialogClose = () => {
        setIsCancelDialogOpen(false);
        setProductIdToDelete(0);
    };

    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea onClick={handleClick}>
                    <CardMedia className={classes.media} image={product.image} title={product.name} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {product.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions disableSpacing>
                    <Button size="small" color="primary" onClick={handleClick}> View Details </Button>
                    <IconButton aria-label="delete" onClick={() => {handleCancelDialogOpen(product.id)}}>
                        <DeleteIcon color="error"/>
                    </IconButton>
                </CardActions>
            </Card>
            <Dialog open={isCancelDialogOpen} onClose={handleCancelDialogClose}>
                <DialogTitle>Delete Product</DialogTitle>
                <DialogContent>
                    You will delete the product, are you sure?
                </DialogContent>
                <DialogActions>
                    <Button autoFocus color="secondary" onClick={handleCancelDialogClose}>
                        Cancel
                    </Button>
                    <Button autoFocus color="primary" onClick={deleteProductById} >
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ProductCard;
