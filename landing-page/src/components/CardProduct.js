import React from "react";
import "../css/styles.css";
import data from "../data/data.json"

function CardProduct() {

    return ( <>

        <div className="product-card-box">
            
            {  (!data) ?  "Products not found"  : data.map(item => { 
                return (
                    <li key={item.id}  ><p className={item["flag-class"]}>{item.flag}</p><div className="product-image-name"> <img className="product-image" src={item.image} alt={item.name} />
                        <p className="product-name"> {item.name} </p> </div><div className="product-price-coupon-button"> <p className="product-price">{item.price}</p> <p className="product-coupon"> Use eCoupon: <span className="product-coupon-bold">{item.coupon}</span></p>
                            <button className="product-addToCart-button">Add to Cart</button> </div></li>
            )})}
            
        </div>
            </> 
            )
    
}

export default CardProduct;