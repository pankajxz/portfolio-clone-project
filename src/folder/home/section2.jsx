import React from 'react'
import Textsec2 from "../home/textsec2"
import Sec2cards from "../home/sec2cards"
import bgsec2 from "../../assets/images/bgsec2.jpg"
import { SiInfluxdb } from "react-icons/si";
import { MdDeveloperBoard } from "react-icons/md";
import { SiDailydotdev } from "react-icons/si";

export const section2 = () => {
    return (
        <div className="section2binder position-relative d-flex flex-wrap gap-5">
            <Textsec2 />
            <div className="col-12 uiuxcardbinder d-flex flex-wrap justify-content-center">
            <Sec2cards 
            title="UI/UX designer"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, est"
            icon={<SiInfluxdb />}
            />
            <Sec2cards
             title="Front-end designer"
             description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, est?"
             icon={<MdDeveloperBoard />}
             />
            <Sec2cards 
            title="Graphic designer"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, est.?"
            icon={<SiDailydotdev />}
            />
            </div>
        </div>
    )
}                                 

export default section2
