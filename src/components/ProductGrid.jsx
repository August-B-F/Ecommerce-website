import React from 'react';
import { Grid } from '@mui/material';
import Product from '../Products/Product/Product';
import { useCart } from '../context/CartContext';

const ProductGrid = ({ products }) => {
  const { addToCart } = useCart();

  if (!products || products.length === 0) {
    return <p>No products to display.</p>;
  }

  return (
    <Grid container spacing={4} justifyContent="center">
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Product product={product} onAddToCart={() => addToCart(product)} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductGrid;