import React from "react";
import './Hero.css';
import heroimg from './heroimg.png';


const Hero = () => {

    /*backgroundImage: 'url("' + heroimg + '") no-repeat',*/
    const sectionStyle = {
        backgroundImage: 'url(' + heroimg + ')',
    };

    
    return (
        <section className="hero" style ={sectionStyle}>
            <h1 className="hero-h1">odph</h1>
        </section>
    );

}

export default Hero;