import React from "react";
import './NavLinks.css';

const NavLinks = () => {

    return (
        <div className="nav-links">
            <ul className="nav-ulist">
                <li className="nav-li">
                    <a href="#" class="nav-link">Inicio</a>
                </li>
                <li className="nav-li">
                    <a href="#proyectos" class="nav-link">Proyectos</a>
                </li>
                <li className="nav-li">
                    <a href="#contacto" class="nav-link">Contacto</a>
                </li>
            </ul>
        </div>
    )
}


export default NavLinks;