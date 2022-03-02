import React from "react";
import './NavLinks.css';

const NavLinks = () => {

    return (
        <>
            <ul className="nav-ulist">
                <li className="nav-li">
                    <a href="#inicio" className="nav-link">Inicio</a>
                </li>
                <li className="nav-li">
                    <a href="#proyectos" className="nav-link">Proyectos</a>
                </li>
                <li className="nav-li">
                    <a href="#contacto" className="nav-link">Contacto</a>
                </li>
            </ul>
        </>
    )
}


export default NavLinks;