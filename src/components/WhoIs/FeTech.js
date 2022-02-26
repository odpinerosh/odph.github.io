import React from 'react';
import cssLogo from './images/css_logo.png';
import jsLogo from './images/js_logo.png';
import htmlLogo from './images/html_logo.png';
import reactLogo from './images/react_logo.png';
import './FeTech.css';

const FeTech = () => {
    
    return (
        <div className = 'fe-tech'>
            <div className="img-container">
                <ul className="img-list">
                    <li><i class="fab fa-react"></i></li>
                    <li><i class="fab fa-html5"></i></li>
                    <li><i class="fab fa-css3"></i></li>
                    <li><i class="fab fa-js"></i></li>
                </ul>
            </div>
        </div>
    );
}

export default FeTech;