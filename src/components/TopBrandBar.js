import React from 'react'
import logo from "../assets/logo.png";
import './TopBrandBar.css'
function TopBrandBar() {
    return (
        <div className='flex flex-row'>
            <img className='logo' src={logo} alt="" />
            <p className='brandName text-white font-bold text-2xl'>Weather Map</p>
        </div>
    )
}

export default TopBrandBar