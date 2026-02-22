import React, { useState } from "react";
import PortfolioCard from "./PortfolioCard";

const PortfolioGrid = ({ items }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      {/* Grid */}
      <div className="row g-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"
          >
            <PortfolioCard item={item} onClick={setSelectedImage} />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
  <div
    className="modal fade show"
    style={{ display: "block", background: "rgba(0,0,0,0.8)" }}
    onClick={() => setSelectedImage(null)}
  >
    <div className="modal-dialog modal-dialog-centered modal-xl">
      <div className="modal-content bg-transparent border-0 position-relative">
        
        {/* ✅ CLOSE BUTTON HERE */}
        <button
          className="btn btn-light position-absolute top-0 end-0 m-3"
          onClick={(e) => {
            e.stopPropagation();
            setSelectedImage(null);
          }}
        >
          ✕
        </button>

        <div className="modal-body text-center p-0">
          <img
            src={selectedImage.image}
            alt=""
            className="img-fluid rounded"
            style={{ maxHeight: "90vh" }}
          />
        </div>

      </div>
    </div>
  </div>
)}

    </>
  );
};

export default PortfolioGrid;
