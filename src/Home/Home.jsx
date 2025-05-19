import React from "react";
import "../App.css";
import "../general.css";
import { Link } from "react-router-dom";
import "./homeStyle.css";
import Cart from "../userUI/cartPreview";

const Home = () => {
  const handleCartButton = (event) => {
    event.preventDefault();
    return;
  };

  return (
    <div>
      <div className="container">
        <div className="navbar">
          <div className="magrg">
            <Link to={"/"}>
              <img src={require("../bilder/sleeq2.png")} alt="" height="45" />
            </Link>
          </div>
          <nav>
            <ul>
              <li>
                <Link to={"/t-shirts"}>T-shirts</Link>
              </li>
              <li>
                <Link to={"/hoodies"}>Hoodies</Link>
              </li>
              <li>
                <Link to={"/sweatshirts"}>Sweatshirts</Link>
              </li>
              <li>
                <Link to={"/sweatpants"}>Sweatpants</Link>
              </li>
              <li>
                <Link to={"/accessories"}>Accessories</Link>
              </li>
            </ul>
          </nav>

          <div className="magrg">
            <a href={"#"}>
              <img src={require("../bilder/cart2.png")} alt="" height="45" />
            </a>
            <Cart />
          </div>

          <div className="magrg">
            <a href={"user"}>
              <img src={require("../bilder/user4.png")} alt="" height="45" />
            </a>
          </div>
        </div>
      </div>

      <table>
        <div class="cont">
          <div className="images">
            <tr>
              <div className="imageCard">
                <a href={"t-shirts"}>
                  <div className="column">
                    <img
                      src={require("../bilder/hoodie (1).png")}
                      alt=""
                      height=""
                    />
                    <h2>T-shirt</h2>
                  </div>
                </a>
              </div>
            </tr> 
              <tr>
                <div className="imageCard">
                  <a href={"hoodies"}>
                    <div className="column">
                      <div className="fix2">
                        <h2>Hoodie</h2>
                      </div>
                      <img
                        src={require("../bilder/an alien hoodie (2).jpg")}
                        alt=""
                      />
                    </div>
                  </a>
                </div>
              </tr>
            <tr>
              <div className="imageCard">
                <a href={"sweatpants"}>
                  <div className="column">
                    <img
                      src={require("../bilder/a monster hoodie (5).png")}
                      alt=""
                    />
                    <h2>Sweatpant</h2>
                  </div>
                </a>
              </div>
            </tr>
          </div>
        </div>
      </table>

      <div className="textmarg">
        <h2>Featured Products</h2>
      </div>
      <div className="row2">
        <a href="">
          <div className="cat1">
            <h2>Jordan 1 High University Blue</h2>
            <h3>499£</h3>
          </div>
        </a>
        <a href="">
          <div className="cat2">
            <h2>Jordan 1 Mid Hyper Royale</h2>
            <h3>229£</h3>
          </div>
        </a>
        <a href="">
          <div className="cat3">
            <h2>Jordan 1 Mid Chicago Black Toe</h2>
            <h3>629£</h3>
          </div>
        </a>
      </div>

      <div className="back">
        <div className="center">
          <h1>About us</h1>
        </div>
        <div className="links">
          <table>
            <tr>
              <th>
                <h1>Get help</h1>
              </th>
              <th>
                <h1>About us</h1>
              </th>
              <th>
                <h1>our policies</h1>
              </th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
