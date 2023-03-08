import React from "react";
import "../css/styles.css";
import { useState } from "react";
import CardProduct from "./CardProduct.js"
import data from '../data/data.json'


function ProductsPcTablet() {

    const [filterVisible, setFilterVisible] = useState(false);
    const [allfilterVisible, setallFilterVisible] = useState(false);

    var count = Object.keys(data).length;
    return ( <>

        <div>
            <h1 className="pcTablet-h1">
                Models
            </h1>

            <div className="product-filter-container">

                <div className="filter-container">
                    

                <button className="filter-button" type="button" onClick={() => setFilterVisible(!filterVisible)}>Filter</button>  
                {filterVisible? ( 
                                 
                    <ul>
                        <h2>Price</h2> 
                        <li><label className="checkbox-container"> $800-$999.99 (2) <input type="checkbox"/>
                        <span class="checkmark"></span></label></li>
                        <li><label className="checkbox-container"> $1,000-$1,499.99 (4) <input type="checkbox"/>
                        <span class="checkmark"></span></label></li>
                        <li><label className="checkbox-container"> $1,500-$1,999.99 (3) <input type="checkbox"/>
                        <span class="checkmark"></span></label></li>

                        <a href="#">See More</a>
                    </ul> ) : null }
                </div>

            <div className="result-select">
            <div> 
                    <select>
                        <option disabled selected >Sort By</option>
                        <option value="1">Price Low To High</option>
                        <option value="2">Price High To Low</option>
                        <option value="3">Best-Selling</option>
                        <option value="4">Delivery Date</option>
                        </select> 
                </div>
            </div>

            <div className="products-container">
            <p className="results" >{count} Matching Results</p>
                <ul>
                <CardProduct/>
                </ul>
            </div>


            </div>


        </div>
            </> 
            )
    
}

export default ProductsPcTablet;