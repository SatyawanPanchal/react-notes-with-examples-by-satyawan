import React from "react";
import "../styles/header.css";
import locationImage from "./images/location1.svg";
import iconImage from "./images/logo.png";
import serchImage from "./images/Search.svg";
import indiaImage from "./images/indiaflag.svg";
import cartImage from "./images/products/icons.png";

const Header = () => {
  return (
    <div className="main_container">
      {/* for header  */}
      <div className="headerdiv">
        <div className="leftdiv">
          <div className="logo">
            <img
              className="amazonicon_image"
              src={iconImage}
              alt="amazon icon"
            />
          </div>

          <div className="deliverdiv">
            <div className="imgdiv">
              <img src={locationImage} alt={locationImage} />
            </div>
            <div className="infodiv">
              <span>Deliver to varsha</span>
              <p>Samalkha 132101</p>
            </div>
          </div>
        </div>

        <div className="middlediv">
          <div className="inputdiv">
            <input type="text" placeholder="Search what to buy..." />
          </div>
          <a href="">
            <img src={serchImage} alt="" />
          </a>
        </div>

        <div className="rightdiv">
          <div className="langdiv">
            <img src={indiaImage} alt="india" />
            <span>En</span>
          </div>
          <a href="#">
            <div className="accountdiv">
              <span>Hello,Varsha</span>
              <p>Account & Lists</p>
            </div>
          </a>
          <a href="#">
            <div className="returndiv">
              <span>Return</span>
              <p>&Orders</p>
            </div>
          </a>

          <div className="cartdiv1">
            <a className="cartdiv" href="#">
              <span>cart</span>
              <span className="imageContainer">
                <img className="cartImage" src={cartImage} alt="carimage" />
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="homediv"></div>
    </div>
  );
};

export default Header;
