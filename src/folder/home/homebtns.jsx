import React from 'react'
import "./homebtns.css"
import Homeimg from "../../assets/images/homegirl.png"

const homebtns = () => {
    return (
        <>
         <div className="col-5 topcvbtns">
          <div className="buttons">
                <button className="homebtn1">Download CV</button>
                <button className="homebtn2">Portfolio</button>
            </div>      
            <div className="col-5 imgcontainer">
                <img src={Homeimg} alt=""/>
            </div>
            </div>      
        </>
    )
}

export default homebtns
