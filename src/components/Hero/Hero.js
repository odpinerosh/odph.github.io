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
            <p className="hero-h1">odph</p>
        </section>
    );

}

export default Hero;