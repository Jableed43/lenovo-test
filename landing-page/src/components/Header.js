import React from "react";
import { useState } from "react";
import "../css/styles.css";
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

// dropdown menu icons
import accesories from "../img/dropdown-icons/accesories.svg";
import business from "../img/dropdown-icons/business.svg";
import desktop from "../img/dropdown-icons/desktop.svg";
import gaming from "../img/dropdown-icons/gaming.svg";
import home from "../img/dropdown-icons/home.svg";
import laptop from "../img/dropdown-icons/laptop.svg";
import monitors from "../img/dropdown-icons/monitors.svg";
import sale from "../img/dropdown-icons/sale.svg";
import services from "../img/dropdown-icons/services.svg";
import students from "../img/dropdown-icons/students.svg";
import tablet from "../img/dropdown-icons/tablet.svg";
import workstation from "../img/dropdown-icons/workstation.svg";
import server from "../img/dropdown-icons/server.svg";
import storage from "../img/dropdown-icons/storage.svg";
import network from "../img/dropdown-icons/network.svg";
import cloud from "../img/dropdown-icons/cloud.svg";
import handShake from "../img/dropdown-icons/handShake.svg";
import disc from "../img/dropdown-icons/disc.svg";
import gear from "../img/dropdown-icons/gear.svg";
import lamp from "../img/dropdown-icons/lamp.svg";
import arrow from "../img/icon-arrow-up.svg";

function Header() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [pcTabletMenuVisible, setPcTabletMenuVisible] = useState(false);
  const [dataMenuVisible, setDataMenuVisible] = useState(false);
  const [serviceMenuVisible, setServiceMenuVisible] = useState(false);

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
                  <img src={iconCompare} alt="Compare two or more products" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={iconUser} alt="Access to User options" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={iconLocator} alt="Access to Store locations" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={iconReward} alt="Access to Reward program" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={iconCart} alt="Access to your Cart" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={iconContact} alt="Contact with lenovo help desk" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={iconWhishlist} alt="Access to your" />
                </a>
              </li>
            </ul>
          </div>
          <div className="button-menu">
            <img
              className="iconBars"
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
                <img src={iconSearch} alt="Search button" />
              </div>
            </div>
          </div>
          {menuVisible ? (
            <div className="dropdown-menu" id="menu">
              <ul>
                <li>
                  <div
                    onClick={() => setPcTabletMenuVisible(!pcTabletMenuVisible)}
                    className="menu-option"
                  >
                    PCS & TABLETS{" "}
                    <img className="arrow-rotate-down" src={arrow} />
                  </div>
                  {pcTabletMenuVisible ? (
                    <ul className="dropdown-menu-ul">
                      <li>
                        <a href="#">
                          <img src={laptop} alt="Go to laptops section" />
                          Laptops
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src={desktop} alt="Go to desktops section" />
                          Desktops
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src={workstation}
                            alt="go to workstations section"
                          />
                          Workstations
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src={tablet} alt="go to tablets section" />
                          Tablets
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src={services}
                            alt="go to accesories and software section"
                          />
                          Accesories & Software
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src={monitors} alt="go to monitors section" />
                          Monitors
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src={home} alt="go to smart home section" />
                          Smart Home
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src={accesories}
                            alt="go to home and office furniture"
                          />
                          Home & Office Furniture
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src={gaming} alt="go to gaming section" /> Gaming
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src={business} alt="go to business section" />
                          Business
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src={students} alt="go to students section" />
                          Students
                        </a>
                      </li>
                      <li>
                        <a href="#" id="sale">
                          <img src={sale} alt="go to sale and offer section" />
                          Sale
                        </a>
                      </li>
                    </ul>
                  ) : null}
                </li>
                <li className="menu-option">
                  <a href="#">PHONES & SMART DEVICES </a>
                  <img className="arrow-rotate-right" src={arrow} />
                </li>
                <li>
                  <div
                    className="menu-option"
                    onClick={() => setDataMenuVisible(!dataMenuVisible)}
                  >
                    DATA CENTER{" "}
                    <img src={arrow} className="arrow-rotate-down" />{" "}
                  </div>
                  {dataMenuVisible ? (
                    <ul className="dropdown-menu-ul">
                      <li>
                        <a href="#">
                          <img
                            src={home}
                            alt="Go to servers and solutions section"
                          />
                          Servers & storage
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src={lamp}
                            alt="Go to servers and storage solutions section"
                          />
                          Solutions
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src={server} alt="Go to servers section" />
                          Servers
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src={storage} alt="Go to storage section" />
                          Storage
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src={network} alt="Go to network section" />
                          Networking
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src={cloud}
                            alt="
                    Go to infrastructure section"
                          />
                          Infrastructure
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src={handShake}
                            alt="Go to server and storage services section"
                          />
                          Services
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src={disc}
                            alt="Go to server and storage software section"
                          />
                          Software
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src={gear}
                            alt="Go to server and storage support section"
                          />
                          Support
                        </a>
                      </li>
                    </ul>
                  ) : null}
                </li>
                <li>
                  <div
                    className="menu-option"
                    onClick={() => setServiceMenuVisible(!serviceMenuVisible)}
                  >
                    SERVICES & SOLUTIONS
                    <img src={arrow} className="arrow-rotate-down" />
                  </div>
                  {serviceMenuVisible ? (
                    <ul className="dropdown-menu-ul">
                      <li>
                        <a href="#">
                          <img
                            src={home}
                            alt="Go to Services and Solutions home section"
                          />
                          Services & Solutions
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src={services}
                            alt="Go to warranty searcher section"
                          />
                          Warranty Searcher
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src={handShake}
                            alt="Go to personal computer services section"
                          />
                          Pc Services
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src={server}
                            alt="Go to data center services section"
                          />
                          Data Center Services
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src={lamp} alt="Go to solutions section" />
                          Solutions
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src={gear}
                            alt="Go to services and solutions support section"
                          />
                          Support
                        </a>
                      </li>
                    </ul>
                  ) : null}
                </li>
                <li className="menu-option">
                  <a href="#">SUPPORT </a>
                  <img src={arrow} className="arrow-rotate-right" />
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      </header>
    </>
  );
}

export default Header;