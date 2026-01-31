import React from 'react'
import "./projects.css"
import blog1 from "../../assets/images/blog1.png"
import blog2 from "../../assets/images/blog2.png"
import "./Projectsmediaquerry.css"

const projects = () => {
    return (
           <div className="container-fluid">
               <div className="row rowprojects d-flex flex-wrap flex-column gap-5">
                   <div className="projecttext col-2 d-flex flex-wrap flex-column">
                       <h3 className="projects">-Projects</h3>
                       <h1 className="projectstitle">My <span className="lest"> Latest Projects</span></h1>
                       <button className="projectsbtn">View All Projects</button>
                   </div>
                    <div className="projectcardcontainer">
                   <div className="projectcard1 col-5 d-flex flex-wrap">
                       <div className="col-6 img98"> 
                       <img src={blog1} alt=""/>
                       </div>
                       </div>
                       <div className="col-6 d-flex flex-wrap pcardtext">
                           <h3 className="ui me-4">UI/UX Design</h3>
                           <h3 className="app me-4">App Design</h3>
                           <h3 className="wire">Wireframe</h3>
                           <h1>Podcast - Podcast <br/>Mobile App Solution page dowh</h1>
                           <p>Lorem ipsum dolor sit amet , consectetur adipiscing elit,sed do eiusmod tempor incidunt ut labore et dolore magna aliqua</p>
                           <button>View Details</button>
                       </div>
                   </div>
                  
                   <div className="projectcardcontainer2 d-flex flex-wrap">
                   <div className="projectcard1 col-5 d-flex flex-wrap">
                       <div className="col-6 img99"> 
                       <img src={blog2} alt=""/>
                       </div>
                       </div>
                       <div className="col-6 d-flex flex-wrap pcardtext">
                           <h3 className="ui me-4">Web Design</h3>
                           <h3 className="app me-4">Landing Page</h3>
                           <h3 className="wire">Wireframe</h3>
                           <h1>Podcast - Podcast <br/>Mobile Application Landing Page</h1>
                           <p>Lorem ipsum dolor sit amet , consectetur adipiscing elit,sed do eiusmod tempor incidunt ut labore et dolore magna aliqua</p>
                           <button>View Details</button>   
                       </div>
                       </div>
                       <div className="divhorline"></div>
                       </div>
                       </div>
    )
}

export default projects;
