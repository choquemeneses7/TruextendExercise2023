import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

const Homepage = () => {
  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to the Product Catalog!
      </Typography>
      <Typography variant="body1" gutterBottom>
        This is a sample application built with React and Spring Boot that allows you to manage a catalog of products.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Click on the links below to get started:
      </Typography>
      <ul>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </div>
  );
};

export default Homepage;
