import React from 'react'
import "./home.css"
import Pluscard from "../home/pluscard"
import Section2 from "../home/section2"
import About from "../about/about"
import Contactme from "../testimonials/contactme"
import Projects from "../projects/projects"
import Portfoliopage from "../myworks/PortfolioPage"
import Homeimg from "../../assets/images/2021.png"
import Homebtn from "../../folder/home/homebtns"

export const Home = () => {
   
    return (
        <>
        <div className="homebinder">
         <div className="container-fluid">
            <div className="row section_onebg">       
            <div className=" imgcontainer">
                <img src={Homeimg} alt=""/>
            </div>
          
            <div className="hellotext d-flex flex-column align-items-center text-center flex-wrap gap-3 pt-8">
              <div className="h3hello col-12 text-black">-Hello</div>
              <h1 className="col-12 h1hello text-black">I'm <span className="pankaj">Pankaj,</span><br/>Web Designer</h1>
              <Pluscard />
              <Homebtn />
            </div>
            </div>
            
        </div>
        <Section2 />
        <Portfoliopage />
        <Projects />  
        <Contactme />
        </div>
        </>
        
    )
}

export default Home
