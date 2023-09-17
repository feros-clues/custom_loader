// src/components/Loader.js
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader-content">
        <CircularProgress color="secondary" />
      </div>
    </div>
  );
};

export default Loader;
