import React from "react";
import "../css/styles.css";
import arrow from "../img/icon-arrow-up.svg";

function Banner() {

    return ( <>
    
    <div className="banner">
        <p>SAVE UP TO 21% ON <span>SELECT THINKPAD LAPTOPS </span> THROUGH NOVEMBER 11TH</p> <div className="shop-now-container"> <a href="#">Shop Now</a> <img src={arrow} className='arrow-rotate-right arrow-go'/> </div> 
    </div>
    
            </> 
            )
    
}

export default Banner;