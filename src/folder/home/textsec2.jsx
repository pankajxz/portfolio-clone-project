import React from 'react'
import { LuCircleArrowRight } from "react-icons/lu";

export const textsec2 = () => {
    return (
        <>
           <div className="wraproundtext d-flex col">
           <div className="sec2text d-flex flex-column flex-wrap position-relative col-8 text-center gap-1 pt-5 text-start align-items-start ps-5">
                <h3 className="text-sm display-6 fw-normal text-white">-Services</h3>
                <h1 className="text-lg display-2 fw-bolder">My Services</h1>
            </div>
            <div className="sec2sliderbtn col-4 d-flex flel-wrap align-items-end ps-5">
              <div className="sliderwrapper row d-flex flex-wrap align-items-center">
                  <button className="swico"><LuCircleArrowRight /></button>
              <h3 className="swh3 col-8">View all services</h3>
              </div>
            </div>
            </div>
        </>
    )
}

export default textsec2
