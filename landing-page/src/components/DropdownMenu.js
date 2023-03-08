import React from "react";
import { useState } from "react";
import "../css/styles.css";
import ServicesSolutionMenu from "./menu/ServicesSolutionMenu"
import DataCenterMenu from "./menu/DataCenterMenu"
import PcTabletMenu from "./menu/PcTabletMenu"
import arrow from "../img/icon-arrow-up.svg";

function DropdownMenu() {

    const [menuVisible, setMenuVisible] = useState(false);
    const [pcTabletMenuVisible, setPcTabletMenuVisible] = useState(false);
    const [dataMenuVisible, setDataMenuVisible] = useState(false);
    const [serviceMenuVisible, setServiceMenuVisible] = useState(false);

    return ( <>

<div className="dropdown-menu" id="menu">
              <ul>
                <li>
                  <div
                    onClick={() => setPcTabletMenuVisible(!pcTabletMenuVisible)}
                    className="menu-option"
                  >
                    <a href="#">PCS & TABLETS</a>
                    <img className="arrow-rotate-down" src={arrow} />
                  </div>
                  {pcTabletMenuVisible ? (
                   <div className="showNotOnDesktop"><PcTabletMenu/></div> ) : null}
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
                    <a href="#">DATA CENTER</a> 
                    <img src={arrow} className="arrow-rotate-down" />{" "}
                  </div>
                  {dataMenuVisible ? (
                   <div className="showNotOnDesktop"> <DataCenterMenu/> </div>  ) : null}
                </li>
                <li>
                  <div
                    className="menu-option"
                    onClick={() => setServiceMenuVisible(!serviceMenuVisible)}
                  >
                    <a href="#">SERVICES & SOLUTIONS</a>
                    <img src={arrow} className="arrow-rotate-down" />
                  </div>
                  {serviceMenuVisible ? ( <div className="showNotOnDesktop"> <ServicesSolutionMenu/> </div>   ) : null}
                </li>
                <li className="menu-option">
                  <a href="#">SUPPORT </a>
                  <img src={arrow} className="arrow-rotate-right" />
                </li>
              </ul>
              <div className="showDesktopOnly"><PcTabletMenu/></div>
              {dataMenuVisible ? (<div className="showDesktopOnly"><DataCenterMenu/></div>  ) : null}
              {serviceMenuVisible ? ( <div className="showDesktopOnly"><ServicesSolutionMenu/></div> ) : null}
            </div>

            </> 
            )
    
}

export default DropdownMenu;