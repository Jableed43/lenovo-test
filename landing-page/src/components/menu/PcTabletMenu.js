import React from "react";
import "../../css/styles.css";

// dropdown menu icons
import accesories from "../../img/dropdown-icons/accesories.svg";
import business from "../../img/dropdown-icons/business.svg";
import desktop from "../../img/dropdown-icons/desktop.svg";
import gaming from "../../img/dropdown-icons/gaming.svg";
import home from "../../img/dropdown-icons/home.svg";
import laptop from "../../img/dropdown-icons/laptop.svg";
import monitors from "../../img/dropdown-icons/monitors.svg";
import sale from "../../img/dropdown-icons/sale.svg";
import services from "../../img/dropdown-icons/services.svg";
import students from "../../img/dropdown-icons/students.svg";
import tablet from "../../img/dropdown-icons/tablet.svg";
import workstation from "../../img/dropdown-icons/workstation.svg";


function PcTabletMenu() {
    return ( <>
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
            </> 
            ) 
}

export default PcTabletMenu;