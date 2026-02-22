import React from 'react'
import { FaPlus } from "react-icons/fa";
import Circle1 from "../../assets/images/circle1.jpg"
import Circle2 from "../../assets/images/circle2.jpg"
import Circle3 from "../../assets/images/circle3.jpg"
import "./pluscard.css"

export const pluscard = () => {
    return (
        <>
        <div className="col-12 homecard">
        <div className="pluscard d-flex flex-wrap">
        <div className="circle1"><img src={Circle1} alt=""/> </div>
        <div className="circle2"><img src={Circle2} alt=""/></div>
        <div className="circle3"><img src={Circle3} alt=""/></div>
        <div className="plusico d-flex flex-wrap">
          <h1><FaPlus /></h1>
            </div>
            </div>
        </div>
        </>
    )
}

export default pluscard
