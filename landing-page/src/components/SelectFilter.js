import React from "react";
import "../css/styles.css";

function SelectFilter() {

    return ( <>
    
        <div> 
    <select>
        <option disabled selected >Sort By</option>
        <option value="1">Price Low To High</option>
        <option value="2">Price High To Low</option>
        <option value="3">Best-Selling</option>
        <option value="4">Delivery Date</option>
        </select> 
    </div>
            </> 
            )
    
}

export default SelectFilter;