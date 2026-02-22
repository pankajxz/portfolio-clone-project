import React, { useState } from "react";
import PortfolioGrid from "./PortfolioGrid";

const PortfolioTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <>
      {/* Tabs */}
      <ul className="nav justify-content-center mb-5">
        {tabs.map((tab) => (
          <li className="nav-item mx-2" key={tab.id}>
            <button
              className={`nav-link px-4 py-2 fw-semibold rounded-pill ${
                activeTab === tab.id
                  ? "bg-white text-purple shadow"
                  : "text-white"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>

      {/* Content */}
      {tabs.map(
        (tab) =>
          tab.id === activeTab && (
            <PortfolioGrid key={tab.id} items={tab.items} />
          )
      )}
    </>
  );
};

export default PortfolioTabs;
