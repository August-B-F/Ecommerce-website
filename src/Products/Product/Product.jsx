import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import ImageWithFallback from '../../components/ImageWithFallback';

const Product = ({ product, onAddToCart }) => {
  return (
    <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.2 }}>
      <Card
        sx={{
          height: '100%', display: 'flex', flexDirection: 'column', textDecoration: 'none', bgcolor: 'background.paper',
          borderRadius: 2, boxShadow: 'none',
        }}
        component={RouterLink}
        to={`/product/${product.id}`}
      >
        <Box sx={{ overflow: 'hidden', borderRadius: 2 }}>
            <ImageWithFallback
                src={product.media.source}
                alt={product.name}
                style={{ width: '100%', height: 350, objectFit: 'cover', display: 'block' }}
            />
        </Box>
        <CardContent sx={{ flexGrow: 1, p: 2, pt: 2 }}>
          <Typography gutterBottom variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
            {product.name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            ${product.price.formatted}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Product;