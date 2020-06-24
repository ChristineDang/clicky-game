import React from "react";
import "./cards.css";

function Img(props) {
    return(
       
    <div className = "clicked" onClick={() => props.clickCount(props.id)}>
        <div className = "img-container">
            <img src={props.image} />
        </div>
    </div> 
    );

}

export default Img;