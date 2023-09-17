import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "./Loader";
import CustomLoader from "./CustomLoader";
import { useLoadingContext } from "../context/LoadingContext"; // Import the context

const EditRequest = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    individualName: "",
    companyName: "",
    email: "",
    firstName: "",
    lastName: "",
    mobile: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // Track form submission
  const [isPageLoaded, setIsPageLoaded] = useState(false); // Track if the page content is loaded
  const { loading, setLoading } = useLoadingContext(); // Use the loading state from the context

  useEffect(() => {
    // Initialize loading state to true
    setLoading(true);

    // Simulate fetching data for editing with setTimeout
    setTimeout(() => {
      const fetchedData = {
        id: 1,
        individualName: "John Doe",
        companyName: "ABC Inc.",
        email: "john@example.com",
        firstName: "John",
        lastName: "Doe",
        mobile: "123-456-7890",
      };
      setFormData(fetchedData);
      setLoading(false); // Set loading to false when data fetching is complete
      setIsPageLoaded(true); // Mark the page content as loaded
    }, 2000); // Simulated 2-second delay
  }, [id, setLoading]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Set form submission to true

    // Simulate saving with setTimeout
    setTimeout(() => {
      setIsSubmitting(false); // Set form submission to false after 2 seconds
      // Redirect back to Dashboard after a successful update
      // navigate("/");
    }, 2000); // Simulated 2-second delay
  };

  // Inline styles
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const formStyle = {
    width: "80%",
    maxWidth: "400px",
    margin: "20px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    background: "#fff",
    position: "relative", // Added position for loader overlay
  };

  const labelStyle = {
    marginBottom: "8px",
  };

  const inputStyle = {
    width: "100%",
    padding: "8px",
    marginBottom: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  const buttonStyle = {
    background: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "10px 20px",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <h1>Edit Request</h1>
      {loading ? ( // Display loader while loading data
        <CustomLoader />
      ) : (
        <>
          {isSubmitting && ( // Display loader while submitting form
            <div
            // style={{
            //   position: "absolute",
            //   top: 0,
            //   left: 0,
            //   right: 0,
            //   bottom: 0,
            //   background: "rgba(255, 255, 255, 0.8)",
            //   display: "flex",
            //   justifyContent: "center",
            //   alignItems: "center",
            // }}
            >
              <CustomLoader />
            </div>
          )}
          {isPageLoaded && (
            <form style={formStyle} onSubmit={handleFormSubmit}>
              <>
                <div>
                  <label style={labelStyle} htmlFor="individualName">
                    Individual Name
                  </label>
                  <input
                    style={inputStyle}
                    type="text"
                    id="individualName"
                    name="individualName"
                    value={formData.individualName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        individualName: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label style={labelStyle} htmlFor="companyName">
                    Company Name
                  </label>
                  <input
                    style={inputStyle}
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={(e) =>
                      setFormData({ ...formData, companyName: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label style={labelStyle} htmlFor="email">
                    Email
                  </label>
                  <input
                    style={inputStyle}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label style={labelStyle} htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    style={inputStyle}
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label style={labelStyle} htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    style={inputStyle}
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label style={labelStyle} htmlFor="mobile">
                    Mobile
                  </label>
                  <input
                    style={inputStyle}
                    type="text"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={(e) =>
                      setFormData({ ...formData, mobile: e.target.value })
                    }
                  />
                </div>
                <button style={buttonStyle} type="submit">
                  Save Changes
                </button>
              </>
            </form>
          )}
        </>
      )}
    </div>
  );
};

export default EditRequest;
