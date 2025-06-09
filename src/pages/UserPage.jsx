import React, { useState } from 'react';
import { Container, Typography, Box, Tabs, Tab, TextField, Button, Grid, Paper } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import FavoriteIcon from '@mui/icons-material/Favorite';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box sx={{ p: { xs: 2, md: 4 } }}>{children}</Box>}
    </div>
  );
}

const UserPage = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', minHeight: 'calc(100vh - 128px)', py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" gutterBottom align="center">My Account</Typography>
        <Paper elevation={3} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 4 }}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={tabValue}
            onChange={handleTabChange}
            sx={{ borderRight: { md: 1 }, borderBottom: { xs: 1, md: 0 }, borderColor: 'divider', minWidth: 200 }}
          >
            <Tab icon={<AccountBoxIcon />} iconPosition="start" label="Profile Settings" />
            <Tab icon={<ShoppingBasketIcon />} iconPosition="start" label="My Orders" />
            <Tab icon={<FavoriteIcon />} iconPosition="start" label="Wishlist" />
          </Tabs>
          <Box sx={{ flexGrow: 1 }}>
              <TabPanel value={tabValue} index={0}>
                  <Typography variant="h4" gutterBottom>Profile Information</Typography>
                  <Grid container spacing={2} sx={{ mt: 1 }}>
                      <Grid item xs={12} sm={6}><TextField fullWidth label="First Name" defaultValue="John" /></Grid>
                      <Grid item xs={12} sm={6}><TextField fullWidth label="Last Name" defaultValue="Doe" /></Grid>
                      <Grid item xs={12}><TextField fullWidth label="Email Address" defaultValue="john.doe@example.com" /></Grid>
                      <Grid item xs={12}><TextField fullWidth label="New Password" type="password" /></Grid>
                      <Grid item xs={12}><Button variant="contained">Save Changes</Button></Grid>
                  </Grid>
              </TabPanel>
              <TabPanel value={tabValue} index={1}>
                  <Typography variant="h5">You have no past orders.</Typography>
              </TabPanel>
              <TabPanel value={tabValue} index={2}>
                  <Typography variant="h5">Your wishlist is empty.</Typography>
              </TabPanel>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default UserPage;