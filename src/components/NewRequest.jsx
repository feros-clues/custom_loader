// src/components/NewRequest.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoadingContext } from "../context/LoadingContext"; // Import the context

const NewRequest = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    individualName: "",
    companyName: "",
    email: "",
    firstName: "",
    lastName: "",
    mobile: "",
  });
  const { setLoading } = useLoadingContext(); // Use the loading state from the context

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when submitting the form

    // Simulate handling form submission with setTimeout
    setTimeout(() => {
      // Handle form submission and data creation here
      // Redirect back to Dashboard after successful creation
      setLoading(false); // Set loading to false after data creation
      navigate("/");
    }, 2000); // Simulated 2-second delay
  };

  return (
    <div>
      <h1>New Request</h1>
      <form onSubmit={handleFormSubmit}>
        {/* Form fields go here */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewRequest;
