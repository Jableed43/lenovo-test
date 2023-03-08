import React from "react";
import "../../css/styles.css";

// dropdown menu icons

import home from "../../img/dropdown-icons/home.svg";
import server from "../../img/dropdown-icons/server.svg";
import storage from "../../img/dropdown-icons/storage.svg";
import network from "../../img/dropdown-icons/network.svg";
import cloud from "../../img/dropdown-icons/cloud.svg";
import handShake from "../../img/dropdown-icons/handShake.svg";
import disc from "../../img/dropdown-icons/disc.svg";
import gear from "../../img/dropdown-icons/gear.svg";
import lamp from "../../img/dropdown-icons/lamp.svg";

function DataCenterMenu() {

    return ( <>
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
                  
            </> 
            )
    
}

export default DataCenterMenu;