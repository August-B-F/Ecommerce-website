import "../general.css";
import React from "react";
// import { Link } from "react-router-dom";
import "./cartStyle.css";

const Cart = () => {
  return (
    <div className="inCart">
      <div className="culomn">
      <h1>no items</h1>
      <div className="waa">
        <a href="cart">
      <button>
      go to cart
      </button>
      </a>
      </div>
    </div>
  </div>
  );
};

export default Cart;
