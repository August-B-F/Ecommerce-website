import '../general.css'
import React from 'react';
import GetData from './ItemCard/card'
import { Link } from "react-router-dom";

const Rhoodies = () => {
    return (<>
            <div className="container">
        <div className="navbar">
          <div className="magrg">

            <Link to={"/"}>
              <img src={require("../bilder/sleeq2.png")} alt="" height="45" />
            </Link>

          </div>
          <nav>
            <ul>
              <li><Link to={"/t-shirts"}>T-shirts</Link></li>
              <li><Link to={"/hoodies"}>Hoodies</Link></li>
              <li><Link to={"/sweatshirts"}>Sweatshirts</Link></li>
              <li><Link to={"/sweatpants"}>Sweatpants</Link></li>
              <li><Link to={"/accessories"}>Accessories</Link></li>
            </ul>
          </nav>
          <div className="magrg">
            <a href={"cart"}>
              <img src={require("../bilder/cart2.png")} alt="" height="45" />
            </a>
          </div>
          <div className="magrg">
            <a href={"user"}>
              <img src={require("../bilder/user4.png")} alt="" height="45" />
            </a>
          </div>
        </div>
      </div>
      <GetData />
    </> 
    )}

export default Rhoodies;