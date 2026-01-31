import React from 'react'
import "./section2.css"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const sec2cards = (props) => {
    return (
        <>
         <div className="uiuxcards gap-3 fs-4 position-relative d-flex flex-wrap flex-column text-center">
            <div className="ico">
           <h1>{props.icon}</h1>
            </div>
            <h1 className="sec2cardh1">{props.title}</h1>
            <p className="psec2card">{props.description}</p>
            <button className="d-flex flex-wrap rounded justify-content-center align-items-center cardbtnsec2">Learn more<MdOutlineKeyboardArrowRight/></button>
        </div>
        </>
    )
}

export default sec2cards
