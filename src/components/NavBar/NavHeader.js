import React, {useState, useEffect} from "react";
import NavLinks from "./NavLinks";

import './NavHeader.css';

const NavHeader = () => {

    const [showNavLinks, setNavLinks] = useState(false);
    
    const [matches, setMatches] = useState (
        window.matchMedia("(min-width: 768px)").matches
    )
    
    useEffect(() => {
        window
            .matchMedia("(min-width: 768px)")
            .addEventListener('change', e => setMatches( e.matches ));
      }, []);    

    const alterState = () => {
        setNavLinks(!showNavLinks);
    }

    return (
        
        <div className="nav-header">
            <a href='/index.html' className="nav-logo">odph</a>

            <button onClick={alterState} className="btn nav-btn">
                <span className="hamburger" >|||</span>
            </button>

            <div className={showNavLinks || matches ? 'nav-links' : 'nav-links no-show'}>
                <NavLinks />
            </div>
            

        </div>
        
        
    )
}


export default NavHeader;