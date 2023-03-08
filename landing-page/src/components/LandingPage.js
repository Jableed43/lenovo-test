import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import OptionsBar from "./OptionsBar";
import ProductsPcTablet from "./ProductsPcTablet";
import BottomBanner from "./BottomBanner"

const LandingPage = () => {
    
    return (
        <>
            <Header/>
            <Banner/>
            <OptionsBar/>
            <ProductsPcTablet/>
            <BottomBanner/>
        </>
    )
}

export default LandingPage;