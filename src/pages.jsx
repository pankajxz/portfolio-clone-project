
import Home from "./folder/home/home"
import Header from "./folder/header"
import About from "./folder/about/about"
import Projects from "./folder/projects/projects"
import Blogs from "./folder/Blogs/blogs"
import Testimonials from "./folder/testimonials/testimonials"
import MaybeShowNavBar from "../src/maybeshownavbar"
import Contactme from "./folder/testimonials/contactme"
import MovingLine from "./folder/header1"
import React, { useEffect, useState } from "react"

import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
  
const pages = () => {
    return (
        <>
            <Router>
               <MaybeShowNavBar>
                
                <Header />
                </MaybeShowNavBar>
                <Routes>
                <Route path="/" element={<Home/>}></Route>
               <Route path="/Home" element={<Home/>}></Route>
               <Route path="/About" element={<About/>} /><Route/>
                <Route path="/Projects" element={<Projects/>} /><Route/>
                <Route path="/Blogs" element={<Blogs/>} /><Route/>
                <Route path="/Testimonials" element={<Testimonials/>} /><Route/>
                <Route path="/Contactme" element={<Contactme/>} /><Route/>
                </Routes>
            </Router>
        </>
    )
}

export default pages
