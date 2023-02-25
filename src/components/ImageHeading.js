import React from "react";
import { useState } from "react";
import "../styles/ImageHeading.css"
import { Link } from "react-router-dom";


export default function ImageHeading(props){


    return(
        <>
            <div className="img-heading">
                <img alt="Image" src={props.img}/>
            
                <div className="img-heading-text">
                    <h1>{props.title}</h1>
                    
                </div>

            </div>

        </>
    );
}

