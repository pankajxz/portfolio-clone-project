import React from 'react'
import { NavLink } from "react-router-dom"
import "./header.css"
import logo2 from "../assets/images/logo2.png"

const header = () => {
    return (
        <div className="navbar p-0 bg-dark navbar-custom">
            <div class="container-fluid fluidheader">
            
            <div className="col-12 navbarr d-flex">
            <div className="navlogo">
                <img src={logo2} alt=""/>
            </div>
                <ul className="d-flex navbarul">
                <NavLink to="/Home"><li className="nav-item">Home</li></NavLink>    
                       <NavLink to="/About"><li className="nav-item">About</li></NavLink>
                       <NavLink to="/Projects"><li className="nav-item">Projects</li></NavLink>
                       <NavLink to="/Blogs"><li className="nav-item">Blogs</li></NavLink>
                       <NavLink to="/Testimonials"><li className="nav-item">Testimonials</li></NavLink>
                </ul>
                <div className="btnheader">
               <NavLink to="/Contactme"><button className="btnhome1">Contact me</button></NavLink> 
                </div>
            </div>  
            </div>
        </div>
    )
}

export default header
