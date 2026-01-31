import React from 'react'
import aboutimg from "../../assets/images/calender.png"
import "./about.css"

const JPG_FILE_URL = "http://localhost:5173/About/pankajcv.docx";

const about = () => {
     const downloadFileAtURL=(url)=>{
      const fileName = url.split('/').pop()
      const aTag = document.createElement('a')
      aTag.href=url
      aTag.setAttribute('download',fileName)
      document.body.appendChild(aTag)     
      aTag.click()
      aTag.remove()
     }

    return (
        <>
           <div className="container-fluid aboutcont">
               <div className="row">
             <div className="about_page p-5 mt-5 d-flex flex-wrap">
                 <div className="col-6 about_logo d-flex flex-wrap flex-column">
                   <img src={aboutimg} alt="book"/>
                 </div>
                 <div className="col-6 about_text d-flex flex-column">
                     <h3 className="textsm">-About Me</h3>
                     <h1 className="textlg lh-1">Who is <span className="pankaj2"> Pankaj Kumar?</span></h1>
                     <p className="parasm pt-4 pb-5 h4 fw-light col-sm-9 lh-base">Lorem ipsum dolor sit amet , consectetur adipiscing elit,sed do eismod tempor incident ut labore et dolore magna aliqua.</p>
                     <div className="row">
                     <div className="col-6 d-flex flex-wrap flex-column projectleft">
                         <h4 className="fw-bold">600+</h4>
                         <h2 className="fw-light h3 pb-5 pt-1">Project Completed</h2>
                         <a href="circle2.jpg" download = ""></a>
                         <button onClick={()=>{downloadFileAtURL(JPG_FILE_URL);
                        }} 
                        className="aboutbtn me-5 py-2 fs-4 fw-bold">Download CV</button>
                         </div>
                     <div className="col-6 d-flex flex-wrap flex-column">
                         <h4 className="fw-bold">50+</h4>
                         <h2 className="fw-light h3 pb-3">Industry covered</h2>
                         <h2 className="display-5 ps-4">P</h2>
                     </div>
                     </div>
                 </div>
             </div>
             <div className="row">
                 <div className="workhead col-12 ">
                     <div className="worktitle d-flex flex-wrap flex-column text-center pt-5 pb-5">
                         <h3>-Education & Work</h3>
                         <h1> <span className="my"> My </span> Education <span className="my">& </span> Work Experiance</h1>
                     </div>
                 </div>
                 <div className="workcardleft col-6 d-flex flex-wrap flex-column gap-1 mb-5">
                     <h2 className="text-start">Education</h2>
                     <div className="Horizontal-line"></div>
                      <h4>Harmony Institute <span className="wl1">2013 - 2014</span></h4>
                      <p>Master in visual arts</p>
                      <h4>Aurora Academy <span className="wl2">2013 - 2014</span></h4>
                      <p>Bachelor in Visual Arts</p>
                      <h4>Crystalbrook<span className="wl3">2013 - 2014</span></h4>
                      <p>High School</p>
                 </div>
                 <div className="workcardright col-6 d-flex flex-wrap flex-column gap-1 mb-5">
                 <h2 className="text-start">Work Experiance</h2>
                 <div className="Horizontal-line"></div>
                      <h4>Insightlancer<span className="wl4">2013 - 2014</span></h4>
                      <p>Senior Product Designer</p>
                      <h4>Self-Employed<span className="wl5">2013 - 2014</span></h4>
                      <p>Visual Artist</p>
                      <h4>KG Graphics Studio<span className="wl6">2013 - 2014</span></h4>
                      <p>Web Designer</p>
                 </div>
             </div>
             </div>
           </div>
        </>
    )
}

export default about
