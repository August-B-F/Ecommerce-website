import React from 'react';
import { Container, Typography, Box, Button, Grid, Paper, ImageList, ImageListItem } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductGrid from '../components/ProductGrid';
import tempData from '../tempData';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const lookbookImages = [
  { img: '/images/hoodie-spider-web.jpg', title: 'Look 1', rows: 2, cols: 2 },
  { img: '/images/accessory-beanie.jpg', title: 'Look 2' },
  { img: '/images/tee-oversized.jpg', title: 'Look 3' },
  { img: '/images/sweatpant-cargo.jpg', title: 'Look 4', cols: 2 },
];

const HomePage = () => {
  const featuredProducts = tempData.slice(0, 4);

  return (
    <Box>
      <Box sx={{ pt: {xs: 15, md: 20}, pb: {xs: 10, md: 15}, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Typography variant="h1" align="center" sx={{ maxWidth: '14ch', mx: 'auto' }}>
              Crafted for the Individual.
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" sx={{ mt: 3, maxWidth: '50ch', mx: 'auto' }}>
              Discover curated pieces that blend minimalist design with uncompromising quality.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 5 }}>
              <Button component={NavLink} to="/hoodies" variant="contained" size="large">Shop The Collection</Button>
            </Box>
          </motion.div>
        </Container>
      </Box>
      
      <Container sx={{ py: 10 }} maxWidth="lg">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
            <ProductGrid products={featuredProducts} />
        </motion.div>
      </Container>
      
      <Box sx={{ py: 10, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
                <Typography variant="h2" align="center" sx={{ mb: 8, fontWeight: 'bold' }}>
                  The Edit
                </Typography>
                <ImageList sx={{ width: '100%', height: 700 }} variant="quilted" cols={4} rowHeight={121}>
                    {lookbookImages.map((item) => (
                        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                        <img src={item.img} alt={item.title} loading="lazy" style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
                        </ImageListItem>
                    ))}
                </ImageList>
            </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;