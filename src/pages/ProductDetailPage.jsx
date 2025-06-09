import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid, Box, Typography, Button } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import { useCart } from '../context/CartContext';
import tempData from '../tempData';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = tempData.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" align="center">Product not found!</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 8 }} maxWidth="lg">
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={product.media.source}
            alt={product.name}
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: 2,
              boxShadow: 3,
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography component="h1" variant="h2" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h4" color="text.secondary" gutterBottom>
            ${product.price.formatted}
          </Typography>
          <Typography variant="body1" paragraph sx={{ mt: 3 }}>
            {product.description}
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            startIcon={<AddShoppingCart />}
            onClick={() => addToCart(product)}
            sx={{ mt: 4, py: 2, px: 4 }}
          >
            Add to Cart
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetailPage;