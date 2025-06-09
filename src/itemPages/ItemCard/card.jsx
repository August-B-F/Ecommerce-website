import "./itemCard.css";
import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material"; 
import Product from "../../Products/Product/Product";
import useStyles from "../../Products/styles";
import tempData from "../../tempData";

const GetData = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    setProducts(tempData);
    setLoading(false);
  }, []);

  const handleAddToCart = (productId, quantity) => {
    console.log(`Added product ${productId} to cart with quantity ${quantity}`);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <main style={classes.content}>
      <div style={classes.toolbar} />
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default GetData;