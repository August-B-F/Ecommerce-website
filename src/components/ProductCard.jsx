import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import ImageWithFallback from './ImageWithFallback';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useCart } from '../context/CartContext';


const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
  return (
    <motion.div
      whileHover="hover"
      style={{ textDecoration: 'none', position: 'relative', display: 'block', overflow: 'hidden', borderRadius: '8px' }}
      variants={{
          initial: { y: 20, opacity: 0 },
          animate: { y: 0, opacity: 1 }
      }}
    >
        <Box component={NavLink} to={`/product/${product.id}`}>
            <ImageWithFallback
                src={product.media.source}
                alt={product.name}
                style={{
                    width: '100%',
                    height: 'auto',
                    aspectRatio: '3/4',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.4s ease',
                }}
            />
        </Box>
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
            {product.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
            ${product.price.formatted}
        </Typography>
      </Box>
       <Box
            sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                p: 2,
                display: 'flex',
                justifyContent: 'center',
                transform: 'translateY(100%)',
                transition: 'transform 0.4s ease',
                '&:hover': {
                    transform: 'translateY(0)',
                }
            }}
       >
            <Button
                variant="contained"
                startIcon={<AddShoppingCartIcon />}
                onClick={(e) => {
                    e.preventDefault();
                    addToCart(product);
                }}
                sx={{width: '90%'}}
            >
                Add to Cart
            </Button>
       </Box>
    </motion.div>
  );
};

export default ProductCard;