import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid, Box, Typography, Button, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useCart } from '../context/CartContext';
import tempData from '../tempData';
import ImageWithFallback from '../components/ImageWithFallback';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = tempData.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <Container sx={{ py: 8, mt: 8 }}>
        <Typography variant="h4" align="center">Product not found!</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 12, mt: {xs: 4, md: 8} }} maxWidth="lg">
      <Grid container spacing={{ xs: 4, md: 8 }}>
        <Grid item xs={12} md={6}>
          <Box sx={{
            position: 'sticky',
            top: '100px',
            maxWidth: '550px',
            mx: 'auto'
          }}>
             <ImageWithFallback
                src={product.media.source}
                alt={product.name}
                style={{ 
                    width: '100%', 
                    height: 'auto', 
                    display: 'block', 
                    borderRadius: '8px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography component="h1" variant="h2" sx={{ fontWeight: 'bold' }} gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h4" color="text.secondary" sx={{ mb: 2 }}>
            ${product.price.formatted}
          </Typography>
          <Typography variant="body1" paragraph sx={{ my: 3 }}>
            {product.description}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<AddShoppingCart />}
            onClick={() => addToCart(product)}
            sx={{ py: 2, width: '100%', maxWidth: '400px' }}
          >
            Add to Cart
          </Button>
          <Box sx={{ mt: 4, maxWidth: '500px' }}>
            <Accordion defaultExpanded sx={{ bgcolor: 'transparent', boxShadow: 'none', borderTop: '1px solid rgba(0, 0, 0, 0.12)'}}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Details</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  - Premium heavy-weight cotton
                  - Relaxed, comfortable fit
                  - Pre-shrunk to minimize shrinkage
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ bgcolor: 'transparent', boxShadow: 'none', borderTop: '1px solid rgba(0, 0, 0, 0.12)', borderBottom: '1px solid rgba(0, 0, 0, 0.12)'}}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Shipping & Returns</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Free shipping on all orders. Returns are accepted within 30 days of purchase.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetailPage;