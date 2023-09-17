import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import EditRequest from "./components/EditRequest";
import NewRequest from "./components/NewRequest";
import { LoadingProvider } from "./context/LoadingContext";
import "./styles/styles.css"; // Import the CSS file
import Sidebar from "./sidebar";

const App = () => {
  return (
    <Router>
      <LoadingProvider>
        <Sidebar />
        <div style={{ marginLeft: "18rem" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/edit/:id" element={<EditRequest />} />
            <Route path="/new" element={<NewRequest />} />
          </Routes>
        </div>
      </LoadingProvider>
    </Router>
  );
};

export default App;
