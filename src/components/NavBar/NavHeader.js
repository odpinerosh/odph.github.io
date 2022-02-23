import React, {useState} from "react";
import NavLinks from "./NavLinks";

import './NavHeader.css';

const NavHeader = () => {

    const [showNavLinks, setNavLinks] = useState(false);

    const alterState = () => {
        alert(showNavLinks);
        setNavLinks(!showNavLinks);
    }

    return (
        
        <div className="nav-header">
            <a href='../index.js' className="nav-logo">&#123; odph &#125;</a>

            <button onClick={alterState} className="btn nav-btn">
                <span className="hamburger" >|||</span>
            </button>

            <div className={showNavLinks ? 'nav-links' : 'nav-links no-show'}>
                <NavLinks />
            </div>
            

        </div>
        
        
    )
}


export default NavHeader;