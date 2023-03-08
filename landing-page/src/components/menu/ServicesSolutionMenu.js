import React from "react";
import "../../css/styles.css";

// dropdown menu icons

import home from "../../img/dropdown-icons/home.svg";
import services from "../../img/dropdown-icons/services.svg";
import server from "../../img/dropdown-icons/server.svg";
import handShake from "../../img/dropdown-icons/handShake.svg";
import gear from "../../img/dropdown-icons/gear.svg";
import lamp from "../../img/dropdown-icons/lamp.svg";

function ServicesSolutionMenu() {

    return ( <>

                    <ul className="dropdown-menu-ul ">
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
                  
            </> 
            )
    
}

export default ServicesSolutionMenu;