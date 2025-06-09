import React, { useState } from 'react';
import { AppBar, Toolbar, Box, Button, IconButton, Badge, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';
import { NavLink } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { useCart } from '../context/CartContext';

const navItems = [
  { name: 'T-Shirts', path: '/t-shirts' },
  { name: 'Hoodies', path: '/hoodies' },
  { name: 'Sweatshirts', path: '/sweatshirts' },
  { name: 'Accessories', path: '/accessories' },
];

const Navbar = () => {
  const { cartItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  
  const navLinkStyle = (isActive) => ({
    color: 'black',
    fontWeight: 500,
    position: 'relative',
    textDecoration: 'none',
    paddingBottom: '4px',
    borderBottom: isActive ? `2px solid black` : '2px solid transparent',
    transition: 'all 0.3s ease-in-out',
  });

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box component={NavLink} to="/" sx={{ my: 2, display: 'inline-block' }}>
        <img src="/images/sleeq2.png" alt="Sleeq Logo" style={{ height: '40px' }} />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <Button component={NavLink} to={item.path} fullWidth sx={{ color: 'text.primary', my: 1 }}>
              {item.name}
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar component="nav" sx={{ 
        bgcolor: 'rgba(255, 255, 255, 0.85)', 
        backdropFilter: 'blur(10px)',
        boxShadow: 'default',
        transition: 'background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
      }}>
         <Toolbar sx={{ justifyContent: 'space-between', py: 1, transition: 'padding 0.3s ease-in-out' }}>
              <Box sx={{ flex: 1, display: { xs: 'flex', md: 'none' } }}>
               <IconButton
                 color= "primary"
                 aria-label="open drawer"
                 edge="start"
                 onClick={handleDrawerToggle}
                 sx={{ mr: 2, color: 'black' }}
               >
                 <MenuIcon />
               </IconButton>
             </Box>
             <Box sx={{ flex: 1, display: { xs: 'none', md: 'flex' }, gap: 4 }}>
                 {navItems.map((item) => ( <NavLink key={item.name} to={item.path} style={({isActive}) => navLinkStyle(isActive)}>{item.name}</NavLink>))}
             </Box>
             <Box sx={{ flex: 1, textAlign: 'center' }}>
                 <NavLink to="/"><img src="/images/sleeq2.png" alt="Sleeq Logo" style={{ height: '45px', transition: 'all 0.3s ease-in-out' }} /></NavLink>
             </Box>
             <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end', color: 'black' }}>
                  <IconButton color="inherit" component={NavLink} to="/user"><AccountCircleOutlinedIcon /></IconButton>
                  <IconButton color="inherit" component={NavLink} to="/cart"><Badge badgeContent={totalItems} color="error"><ShoppingCartOutlinedIcon /></Badge></IconButton>
             </Box>
         </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;