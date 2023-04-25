import React, { useState } from "react";
import {
  Button, TextField, Select, MenuItem, InputLabel, FormControl, makeStyles} from "@material-ui/core";
import { Category } from "../types/Category";
import axios from "axios";
import { createProduct } from "../services/api";
import { NewProduct } from '../types/Product';
import Error from "./Error";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

interface Props {
  categories: Category[];
  onCreate: () => void;
}

const CreateProductForm: React.FC<Props> = ({ categories, onCreate }) => {
  const classes = useStyles();

  const [productName, setProductName] = useState<string>("");
  const [price, setPrice] = useState<number | "">(0);
  const [categoryId, setCategoryId] = useState<number | "">("");
  const [image, setImage] = useState<string>("");
  const [serverErrors, setServerErrors] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      let newProduct:NewProduct = {
        name: productName,
        price: Number(price),
        category_id: Number(categoryId),
        image: image,
      }
      await createProduct(newProduct);
      onCreate();
      setProductName("");
      setPrice(0);
      setCategoryId("");
      setImage("");
    } catch (error) {
        console.log("exrror: ", error)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        required
        label="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <TextField
        required
        label="Price"
        type="number"
        value={price}
        onChange={(e) => setPrice(parseFloat(e.target.value) as number)}
      />
      <FormControl className={classes.formControl}>
        <InputLabel>Category</InputLabel>
        <Select
          required
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value as number)}
        >
          {categories.map((category) => (
            <MenuItem key={category.id} value={category.id}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        required
        label="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Create
      </Button>
    </form>
  );
};

export default CreateProductForm;
