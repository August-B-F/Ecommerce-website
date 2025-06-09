import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar, IconButton, Box, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCart } from '../context/CartContext';
import { NavLink } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce((total, item) => total + item.price.raw * item.quantity, 0).toFixed(2);

  return (
    <Container sx={{ mt: 12, mb: 8 }} maxWidth="md">
      <Typography variant="h2" align="center" gutterBottom>
        Your Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Box textAlign="center" mt={5}>
            <Typography variant="h6">Your cart is empty.</Typography>
            <Button component={NavLink} to="/" variant="contained" sx={{ mt: 2 }}>Continue Shopping</Button>
        </Box>
      ) : (
        <>
          <List>
            {cartItems.map((item) => (
              <ListItem
                key={item.id}
                secondaryAction={
                  <IconButton edge="end" aria-label="delete" onClick={() => removeFromCart(item.id)}>
                    <DeleteIcon />
                  </IconButton>
                }
                sx={{ mb: 2, bgcolor: 'background.paper', borderRadius: 2 }}
              >
                <ListItemAvatar>
                  <Avatar variant="rounded" src={item.media.source} sx={{ width: 80, height: 80, mr: 2 }} />
                </ListItemAvatar>
                <ListItemText
                  primary={item.name}
                  secondary={`Quantity: ${item.quantity}`}
                  primaryTypographyProps={{ fontWeight: 'bold' }}
                />
                 <Typography variant="h6">${(item.price.raw * item.quantity).toFixed(2)}</Typography>
              </ListItem>
            ))}
          </List>
          <Box sx={{ mt: 4, textAlign: 'right' }}>
            <Typography variant="h4">Total: ${totalPrice}</Typography>
            <Button variant="contained" size="large" sx={{ mt: 2 }}>
              Proceed to Checkout
            </Button>
          </Box>
        </>
      )}
    </Container>
  );
};

export default CartPage;