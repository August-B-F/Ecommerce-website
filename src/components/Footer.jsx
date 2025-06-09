import React from 'react';
import { Box, Container, Typography, Link, Grid, IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>SLEEQ</Typography>
            <Typography variant="subtitle1" color="rgba(255,255,255,0.7)">
              Modern streetwear for the modern individual.
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2}>
            <Typography variant="h6" gutterBottom>Shop</Typography>
            <Link href="/t-shirts" color="inherit" display="block">T-Shirts</Link>
            <Link href="/hoodies" color="inherit" display="block">Hoodies</Link>
            <Link href="/sweatpants" color="inherit" display="block">Sweatpants</Link>
          </Grid>
          <Grid item xs={6} sm={2}>
            <Typography variant="h6" gutterBottom>Company</Typography>
            <Link href="#" color="inherit" display="block">About Us</Link>
            <Link href="#" color="inherit" display="block">Contact</Link>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ textAlign: { sm: 'right'} }}>
            <Typography variant="h6" gutterBottom>Follow Us</Typography>
            <IconButton color="inherit"><TwitterIcon /></IconButton>
            <IconButton color="inherit"><InstagramIcon /></IconButton>
          </Grid>
        </Grid>
        <Typography variant="body2" align="center" sx={{ pt: 4, borderTop: '1px solid rgba(255,255,255,0.2)', mt: 4 }}>
          {'Copyright © '}
          <Link color="inherit" href="https://sleeq.netlify.app/">Sleeq</Link>{' '}
          {new Date().getFullYear()}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;