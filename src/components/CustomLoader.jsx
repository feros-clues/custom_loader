// src/components/CustomLoader.js
import React from "react";
import "./CustomLoader.css";

const CustomLoader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader-content">
        <div className="loader-dot-row">
          {[0, 1, 2].map((index) => (
            <div
              className="loader-dot"
              key={index}
              style={{ "--dot-index": index }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomLoader;
