import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import ProductGrid from '../components/ProductGrid';
import tempData from '../tempData';

const ProductPage = ({ category }) => {
  const products = tempData.filter(p => p.category === category);

  return (
    <Container sx={{ py: 12, mt: 8 }} maxWidth="lg">
      <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
        {category}s
      </Typography>
      <Box mt={6}>
        <ProductGrid products={products} />
      </Box>
    </Container>
  );
};

export default ProductPage;