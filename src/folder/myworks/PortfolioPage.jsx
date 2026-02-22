import React from "react";
import PortfolioTabs from "../myworks/portfolioTabs"
import portfolioData from "../myworks/portfolioData"
import "./portfolio.css";

const PortfolioPage = () => {
  return (
    <div className="portfolio-bg py-5">
      <div className="container">
      <div className="designstext">
                  <h3>Precision-Built Projects: <span className="designspan">  Designed to Perform</span></h3>
                  <h4>Every Project Engineered with Precision, Designed to Perform Seamlessly, and Delivered with a Passion for Excellence</h4>
                    </div>
        <PortfolioTabs tabs={portfolioData} />
      </div>
    </div>
  );
};

export default PortfolioPage;
