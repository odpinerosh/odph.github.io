import React from "react";
import Button from '../generals/Button';
import './Card.css';

const Card = (props) => {

    return (
        <div className="single-card">
            <div className = "card-img">
                <img src={props.pimg} alt={props.pname} />
            </div>
            <div className="card-body">
                <h3 className="pro-title">{props.pname}</h3>
                <p className="pro-desc">{props.ptext}</p>
                <Button caption="Visitar" url={props.purl}/>
            </div>
        </div>
    );
}

export default Card;