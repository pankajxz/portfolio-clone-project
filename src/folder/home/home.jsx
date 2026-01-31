import React from 'react'
import Kubernatives from "../../assets/images/kubernatives.png"
import "./home.css"
import Pluscard from "../home/pluscard"
import Homepicturee from "../home/homepicture"
import Homebtns from "../home/homebtns"
import Section2 from "../home/section2"
import About from "../about/about"
import Contactme from "../testimonials/contactme"
import Projects from "../projects/projects"

const home = () => {
    return (
        <>
        <div className="homebinder">
         <div className="container-fluid">
            <div className="row section_onebg">
            <div className="col-10  hellotext d-flex flex-column align-items-center text-center flex-wrap gap-3 pt-8">
              <h3 className="h3hello text-black">-Hello</h3>
              <h1 className="h1hello text-black">I'm <span className="pankaj">Pankaj,</span><br/>Product Designer</h1>
            </div>
            <div className="col-2 kuber">
              <img src={Kubernatives} alt=""/>
            </div>
             <Pluscard />
             <Homebtns />
            </div>
        </div>
        <Section2 />
        <About />
        <Projects />
        <Contactme />
        </div>
        </>
    )
}

export default home
