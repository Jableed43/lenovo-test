import React from "react";
import "../css/styles.css";
import { useState } from "react";
import CardProduct from "./CardProduct.js";
import Filter from "./Filter";
import data from "../data/data.json";
import SelectFilter from "./SelectFilter";

function ProductsPcTablet() {
  const [filterVisible, setFilterVisible] = useState(false);
  const [allfilterVisible, setallFilterVisible] = useState(false);

  var count = Object.keys(data).length;
  return (
    <>
      <div className="product-big-container">
        <h1 className="pcTablet-h1">Models</h1>

        <div className="product-filter-container">
          <div className="filter-container">
            <div className="showDesktopOnly">
              <Filter />
              </div>
            <button
              className="filter-button showNotOnDesktop"
              type="button"
              onClick={() => setFilterVisible(!filterVisible)}
            >
              Filter
            </button>
            {filterVisible ? <Filter /> : null}
          </div>


            <div className="products-container">
            <div className="result-select">
            <p className="results showDesktopOnly">{count} Matching Results</p>

            <SelectFilter />
        </div>
            <p className="results showNotOnDesktop">{count} Matching Results</p>
            <ul>
              <CardProduct props={data} />
            </ul>
          
          </div>

          
        </div>
      </div>
    </>
  );
}

export default ProductsPcTablet;
