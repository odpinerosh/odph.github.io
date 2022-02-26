import React from "react";
import MainInfo from './MainInfo.js';
import FeTech from './FeTech.js';

import './WhoIs.css';


const WhoIs = () => {

    return (
        <section className='who-is'>
            <MainInfo />
            <FeTech />
        </section>
    );


}

export default WhoIs;