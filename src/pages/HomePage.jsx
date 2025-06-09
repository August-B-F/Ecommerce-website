import React, { useState } from 'react';
import { Container, Typography, Box, Button, Grid, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import tempData from '../tempData';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

const HeroSection = () => (
    <Box sx={{
        height: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        overflow: 'hidden'
    }}>
        <video autoPlay loop muted playsInline style={{ position: 'absolute', width: '100%', height: '100%', left: '0', top: '0', objectFit: 'cover', zIndex: 1, filter: 'brightness(0.5)' }}>
            <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                <Typography variant="h1" sx={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>
                    Engineered for Expression
                </Typography>
                <Typography variant="h5" sx={{ mt: 3, maxWidth: '50ch', mx: 'auto', textShadow: '0 1px 6px rgba(0,0,0,0.6)' }}>
                    Premium streetwear that doesn't compromise on style or substance.
                </Typography>
                <Button component={NavLink} to="/hoodies" variant="contained" size="large" endIcon={<ArrowForwardIcon />} sx={{ mt: 5 }}>
                    Explore The Collection
                </Button>
            </motion.div>
        </Container>
    </Box>
);

const FeaturedProductsSection = () => {
    const [[page, direction], setPage] = useState([0, 0]);
    const productsPerPage = 3;
    const products = tempData.filter(p => [1, 7, 5, 2, 4, 6].includes(p.id)); // Example selection
    
    const paginate = (newDirection) => {
        const newPage = page + newDirection;
        if (newPage >= 0 && newPage < Math.ceil(products.length / productsPerPage)) {
            setPage([newPage, newDirection]);
        }
    };

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    return (
      <Box sx={{ bgcolor: 'background.paper', py: 12 }}>
         <Container maxWidth="lg">
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
                 <Typography variant="h2" align="center" sx={{ fontWeight: 'bold', mb: 8 }}>
                     Featured Products
                 </Typography>
                 <Box sx={{ position: 'relative', overflow: 'hidden', height: 450 }}>
                     <AnimatePresence initial={false} custom={direction}>
                         <motion.div
                             key={page}
                             custom={direction}
                             variants={slideVariants}
                             initial="enter"
                             animate="center"
                             exit="exit"
                             transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                             style={{
                                 position: 'absolute',
                                 width: '100%',
                             }}
                         >
                             <Grid container spacing={4} justifyContent="center">
                                 {products.slice(page * productsPerPage, page * productsPerPage + productsPerPage).map(prod => (
                                     <Grid item xs={12} md={4} key={prod.id}>
                                         <Card component={NavLink} to={`/product/${prod.id}`} sx={{textDecoration: 'none', height: '100%'}}>
                                              <CardMedia component="img" image={prod.media.source} alt={prod.name} sx={{ height: 300, objectFit: 'cover' }} />
                                              <CardContent>
                                                 <Typography variant="h6">{prod.name}</Typography>
                                                 <Typography color="text.secondary">${prod.price.formatted}</Typography>
                                              </CardContent>
                                         </Card>
                                     </Grid>
                                 ))}
                             </Grid>
                         </motion.div>
                     </AnimatePresence>
                 </Box>
             </motion.div>
         </Container>
     </Box>
  );
};

const BrandManifestoSection = () => (
    <Box sx={{ position: 'relative', height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', overflow: 'hidden' }}>
        <motion.div style={{  y: useTransform(useScroll().scrollYProgress, [0, 1], ['-20%', '20%']), position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1, filter: 'brightness(0.4)', background: 'url(/images/home/lookbook.jpg) no-repeat center center/cover' }} />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sectionVariants}>
                <Typography variant="h2" sx={{ fontFamily: 'serif', fontStyle: 'italic', fontSize: {xs: '2.5rem', md: '3.5rem'}, lineHeight: 1.4 }}>
                    "Fashion fades, but style is eternal. We build the pieces that last."
                </Typography>
            </motion.div>
        </Container>
    </Box>
);


const HomePage = () => {
    return (
        <Box>
            <HeroSection />
            <FeaturedProductsSection />
            <BrandManifestoSection />
        </Box>
    );
};

export default HomePage;