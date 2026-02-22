import React from 'react'
import "./contactme.css"
import { FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { GiHexagonalNut } from "react-icons/gi";
import { CiLocationOn } from "react-icons/ci";


const contactme = () => {
    return (
        <>
            <div className="caontainer contactcontainer p-5">
                <div className="row ">
                    <div className="contactpage col-5 d-flex flex-column flex-wrap ps-5 text-white mt-4">
                    <h3 className="contact text-white pb-1">- Contact Us</h3>
                    <h1 className="bigtext display-4 fw-normal ">Lets <span className="connecttext">Connect</span> &<br/><span className="collabtext">Collaborate</span></h1>
                    <p className="paratext py-4 col-sm-9">Lorem ipsum dolor sit amet,consectular adipiscing elit, sed do eiusmod tempor kdn fenv r fiev fnke u</p>
                    <h4 className="phno fw-normal"><span className="phnoico me-2"><FaPhoneAlt /> </span>+91 9 9 8 8 9 6 0 6 0 7</h4>
                     <h4 className="gmail fw-normal py-5"><span className="gmailico me-2"><SiGmail /></span> pankajnh10000@gmail.com</h4> 
                     <h4 className="example fw-normal"><spAN className="exico me-2"><GiHexagonalNut /></spAN> iampankaj.official94@gmail.com</h4>
                     <h4 className="address fw-normal pt-5"><span className="addressico me-2"><CiLocationOn /></span> # 2802, Sec-49D, CHANDIGARH</h4>
                     </div>
                    <div className="col-7 contactpageinput p-4 mt-3">
                       <div className="labels d-flex flex-wrap">
                           <label htmlFor="fname"></label>
                           <input className="ifile" type="text" id="fname" placeholder="First Name *"/>
                           <label htmlFor="fname"></label>
                           <input className="ifile" type="text" id="fname" placeholder="Last Name *"/>
                           <label htmlFor="fname"></label>
                           <input className="ifile" type="text" id="fname" placeholder="Email *"/>
                           <label htmlFor="fname"></label>
                           <input className="ifile" type="text" id="fname" placeholder="Phone number *"/>
                           <label htmlFor="fname"></label>
                           <input className="subject" type="text" id="fname" placeholder="Subject *"/>
                           <label htmlFor="fname"></label>
                           <input className="message" type="text" id="message" placeholder="Message *"/>
                       </div>
                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default contactme
