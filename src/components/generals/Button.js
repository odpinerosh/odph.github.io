import React from "react";
import './Button.css';

const Button = (props) => {

    return (
        <a className="btn-visit" href={props.url} target='_blank'>
            {props.caption}
        </a>
    );
}


export default Button;