import React from "react";

const PortfolioCard = ({ item, onClick }) => {
  return (
    <div className="portfolio-card" onClick={() => onClick(item)}>
      <img
        src={item.image}
        alt={item.title}
        className="img-fluid rounded"
      />
    </div>
  );
};

export default PortfolioCard;
