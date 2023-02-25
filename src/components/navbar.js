import React from "react";
import { useState } from "react";
import "../styles/Navbar.css"
import { Link } from "react-router-dom";

export default function Navbar(){

    const [isOpen, setIsOpen] = useState(false)


    return(
        <nav className="navbar-items" >
            <h1 className="navbar-icon"><i class="fa-solid fa-code"></i>Algorithmus</h1>
            
            <div className="menu-icon" onClick={()=>setIsOpen(!isOpen)}>
                <i className={isOpen?"fas fa-times":"fas fa-bars"}></i>
            </div>

            <ul className={isOpen?"nav-menu open":"nav-menu"}>
                <li><Link to="/" onClick={() => {setIsOpen(false); window.scrollTo(0,0)}}><i class="fa-solid fa-house"></i>Inicio</Link></li>
                <li><Link to="projects" onClick={() => {setIsOpen(false); window.scrollTo(0,0)}}><i class="fa-solid fa-list-check"></i>Proyectos</Link></li>
                <li><Link to="members" onClick={() => {setIsOpen(false); window.scrollTo(0,0)}}><i class="fa-solid fa-user"></i>Integrantes</Link></li>
                <li><Link to="contact" onClick={() => {setIsOpen(false); window.scrollTo(0,0)}}><i class="fa-solid fa-phone"></i>Contacto</Link></li>

            </ul>
        </nav>
        
    );
}