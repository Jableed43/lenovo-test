import React from "react";
import "../css/styles.css";

const Filter = () => {
    
    return (
        <>
            <ul>
                        <h2>Price</h2> 
                        <li><label className="checkbox-container"> $800-$999.99 (2) <input type="checkbox"/>
                        <span class="checkmark"></span></label></li>
                        <li><label className="checkbox-container"> $1,000-$1,499.99 (4) <input type="checkbox"/>
                        <span class="checkmark"></span></label></li>
                        <li><label className="checkbox-container"> $1,500-$1,999.99 (3) <input type="checkbox"/>
                        <span class="checkmark"></span></label></li>

                        <a href="#">See More</a>
                    </ul>
        </>
    )
}

export default Filter;