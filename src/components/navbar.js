import React from "react";
import { useState } from "react";
import "../styles/navbar.css"
import { Link } from "react-router-dom";

export default function Navbar(){

    const [isOpen, setIsOpen] = useState(false)

    return(
        <div className="navbar">
            <img className="logo" src={require("../assets/images/Logo.png")} alt="Logo" width="100" height="100"/>

            <div className={ `${isOpen?"nav-items open":"nav-items"}`  }>
                <Link to="/">Inicio</Link>
                <Link to="projects">Proyectos</Link>
                <Link to="members">Integrantes</Link>
                <Link to="contact">Contacto</Link> 
            </div>

            <div className={ `${isOpen?"nav-toggle open":"nav-toggle"}`  } onClick={() => setIsOpen(!isOpen)}>
                <div className="bar"></div>
            </div>
                
            
        </div>
        


    );
}