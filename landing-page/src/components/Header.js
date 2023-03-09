import React from "react";
import { useState } from "react";
import "../css/styles.css";
import DropdownMenu from "./DropdownMenu";
// Logo and utility navbar
import logo from "../img/EnmascararGrupo2.svg";
import iconCompare from "../img/compare.svg";
import iconUser from "../img/icon-user-profile.svg";
import iconLocator from "../img/icon-store-locator.svg";
import iconReward from "../img/lenovo-rewards.svg";
import iconCart from "../img/icon-cart.svg";
import iconContact from "../img/icon-contact-info.svg";
import iconWhishlist from "../img/icon-wishlist-empty.svg";
import iconBars from "../img/bars-solid.svg";
import iconSearch from "../img/Search.svg";

function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
      <header>
        <div className="logoIcon-container">
          <div className="logo">
            <a href="http://localhost:3000/">
              <img src={logo} alt="Lenovo Logo" />
            </a>
          </div>
          <div className="utilityBar">
            <ul className="iconList">
              <li>
                <a href="#">
                  <img className="utility-icon" src={iconCompare} alt="Compare two or more products" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="utility-icon"  src={iconWhishlist} alt="Access to your wishlist" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="utility-icon"  src={iconLocator} alt="Access to Store locations" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="utility-icon"  src={iconContact} alt="Access to contact section" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="utility-icon"  src={iconReward} alt="Access to rewards program section" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="utility-icon"  src={iconUser} alt="Access to your user profile section" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="utility-icon"  src={iconCart} alt="Access to your personal cart section" />
                </a>
              </li>
            </ul>
          </div>
          <div className="showDesktopOnly dropdown-desktop">
          <DropdownMenu/>
          </div>
          
          <div className="button-menu">
            <img
              className="iconBars showNotBars"
              onClick={() => setMenuVisible(!menuVisible)}
              src={iconBars}
              alt="Menu button"
            />
            <div className="search-input-container">
              <input
                className="search-input"
                placeholder="What are you looking for today?"
                type="text"
                name="search-input"
                id="search-input"
              />
              <div className="search-icon-container">
                <button><img src={iconSearch} alt="Search button" /></button>
              </div>
            </div>
          </div>
          {menuVisible ? (
            <div className='showNotOnDesktop'>
               <DropdownMenu/>
            </div>
          ) : null}
        </div>
      </header>
    </>
  );
}

export default Header;