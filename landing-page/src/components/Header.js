import React from 'react';
import "../css/styles.css"
import logo from '../img/EnmascararGrupo2.svg'
import iconCompare from '../img/compare.svg' 
import iconUser from '../img/icon-user-profile.svg' 
import iconLocator from '../img/icon-store-locator.svg' 
import iconReward from '../img/lenovo-rewards.svg'
import iconCart from '../img/icon-cart.svg'
import iconContact from '../img/icon-contact-info.svg'
import iconWhishlist from '../img/icon-wishlist-empty.svg'
import iconBars from '../img/bars-solid.svg'

import iconSearch from '../img/Search.svg'

function Header() {
  return (
    <>
        <header>
        <div className='logoIcon-container'>
            <div className='logo'> <a href="http://localhost:3000/"><img src={logo} alt="Lenovo Logo" /> </a> </div>
            <div className='utilityBar'>
                <ul className='iconList'>
                    <li><img src={iconCompare} alt="Compare two or more products" /></li>
                    <li><img src={iconUser} alt="Access to User options" /></li>
                    <li><img src={iconLocator} alt="Access to Store locations" /></li>
                    <li><img src={iconReward} alt="Access to Reward program" /></li>
                    <li><img src={iconCart} alt="Access to your Cart" /></li>
                    <li><img src={iconContact} alt="Contact with lenovo help desk" /></li>
                    <li><img src={iconWhishlist} alt="Access to your" /></li>
                </ul>
                </div>
                <div className='button-menu'><img className='iconBars' src={iconBars} alt="Menu button" /> <div className='search-input-container' ><input className='search-input' placeholder='What are you looking for today?' type="text" name="search-input" id="search-input" /> <div className='search-icon-container'><img src={iconSearch} alt="" /></div> </div>     </div> 
                <div className='dropdown-menu'>
                <ul>
                    <li>PCS & TABLETS</li>
                    <li>PHONES & SMART DEVICES</li>
                    <li>DATA CENTER</li>
                    <li>SERVICES & SOLUTIONS</li>
                    <li>SUPPORT</li>
                </ul>
                </div> 
        </div>




        </header>
    </>
  );
}

export default Header;


