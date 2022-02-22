import React from "react";
import NavLinks from "./NavLinks";

import './NavHeader.css';

const NavHeader = () => {

    return (
        
        <div className="nav-header">
            <a href='../index.js' className="nav-logo">&#123; odph &#125;</a>

            <button class="btn nav-btn">
                <span class="hamburger" >|||</span>
            </button>

            <NavLinks />

        </div>
        
        
    )
}


export default NavHeader;