import React from 'react';
import "./CardOne.css";

const CardOne = (props) => {
    return (
        <>
            <div className='card'>
                <img src={props.image_url} alt={props.details} />
                <h3>{props.details}</h3>
            </div>
        </>
    )
}

export default CardOne