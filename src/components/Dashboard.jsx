import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import { useLoadingContext } from "../context/LoadingContext"; // Import the context
import CustomLoader from "./CustomLoader";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [isPageLoaded, setIsPageLoaded] = useState(false); // Track if the page content is loaded
  const { loading, setLoading } = useLoadingContext(); // Use the loading state from the context

  useEffect(() => {
    setLoading(true); // Set loading to true when data fetching starts

    // Simulate fetching data with setTimeout
    setTimeout(() => {
      const fetchedData = [
        {
          id: 1,
          individualName: "John Doe",
          companyName: "ABC Inc.",
          email: "john@example.com",
          firstName: "John",
          lastName: "Doe",
          mobile: "123-456-7890",
        },
        {
          id: 2,
          individualName: "Jane Smith",
          companyName: "XYZ Corp.",
          email: "jane@example.com",
          firstName: "Jane",
          lastName: "Smith",
          mobile: "987-654-3210",
        },
        {
          id: 3,
          individualName: "Alice Johnson",
          companyName: "LMN Ltd.",
          email: "alice@example.com",
          firstName: "Alice",
          lastName: "Johnson",
          mobile: "555-555-5555",
        },
        {
          id: 3,
          individualName: "Alice Johnson",
          companyName: "LMN Ltd.",
          email: "alice@example.com",
          firstName: "Alice",
          lastName: "Johnson",
          mobile: "555-555-5555",
        },
        {
          id: 3,
          individualName: "Alice Johnson",
          companyName: "LMN Ltd.",
          email: "alice@example.com",
          firstName: "Alice",
          lastName: "Johnson",
          mobile: "555-555-5555",
        },
        {
          id: 3,
          individualName: "Alice Johnson",
          companyName: "LMN Ltd.",
          email: "alice@example.com",
          firstName: "Alice",
          lastName: "Johnson",
          mobile: "555-555-5555",
        },
        {
          id: 3,
          individualName: "Alice Johnson",
          companyName: "LMN Ltd.",
          email: "alice@example.com",
          firstName: "Alice",
          lastName: "Johnson",
          mobile: "555-555-5555",
        },
        {
          id: 3,
          individualName: "Alice Johnson",
          companyName: "LMN Ltd.",
          email: "alice@example.com",
          firstName: "Alice",
          lastName: "Johnson",
          mobile: "555-555-5555",
        },
        {
          id: 3,
          individualName: "Alice Johnson",
          companyName: "LMN Ltd.",
          email: "alice@example.com",
          firstName: "Alice",
          lastName: "Johnson",
          mobile: "555-555-5555",
        },
        {
          id: 3,
          individualName: "Alice Johnson",
          companyName: "LMN Ltd.",
          email: "alice@example.com",
          firstName: "Alice",
          lastName: "Johnson",
          mobile: "555-555-5555",
        },
        {
          id: 3,
          individualName: "Alice Johnson",
          companyName: "LMN Ltd.",
          email: "alice@example.com",
          firstName: "Alice",
          lastName: "Johnson",
          mobile: "555-555-5555",
        },
        {
          id: 3,
          individualName: "Alice Johnson",
          companyName: "LMN Ltd.",
          email: "alice@example.com",
          firstName: "Alice",
          lastName: "Johnson",
          mobile: "555-555-5555",
        },
      ];
      setData(fetchedData);
      setIsPageLoaded(true); // Mark the page content as loaded
      setLoading(false); // Set loading to false when data fetching is complete
    }, 2000); // Simulated 2-second delay
  }, [setLoading]);

  const mainContentStyle = {
    padding: "20px",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    border: "1px solid #ddd",
    background: "#f2f2f2", // Background color for the table
    color: "#333", // Text color in the table
  };

  const tableHeaderStyle = {
    background: "#333",
    color: "white", // Text color for table headers
    padding: "10px",
    border: "1px solid #ddd",
    textAlign: "left",
  };

  const tableCellStyle = {
    padding: "10px",
    border: "1px solid #ddd",
    textAlign: "left",
  };

  const editLinkStyle = {
    textDecoration: "none",
    color: "blue",
  };

  const newRequestLinkStyle = {
    display: "block",
    margin: "20px 0",
    textDecoration: "none",
    fontSize: "18px",
    color: "green",
  };

  return (
    <div>
      <h1
        style={{ marginBottom: "20px", fontSize: "24px", textAlign: "center" }}
      >
        Dashboard
      </h1>
      {loading ? (
        <CustomLoader />
      ) : (
        <>
          {isPageLoaded && (
            /* Dashboard content */
            <div style={mainContentStyle}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={tableHeaderStyle}>Individual Name</th>
                    <th style={tableHeaderStyle}>Company Name</th>
                    <th style={tableHeaderStyle}>Email</th>
                    <th style={tableHeaderStyle}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.id}>
                      <td style={tableCellStyle}>{item.individualName}</td>
                      <td style={tableCellStyle}>{item.companyName}</td>
                      <td style={tableCellStyle}>{item.email}</td>
                      <td style={tableCellStyle}>
                        <Link to={`/edit/${item.id}`} style={editLinkStyle}>
                          Edit
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Link to="/new" style={newRequestLinkStyle}>
                New Request
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Dashboard;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Loader from "./Loader";
// import { useLoadingContext } from "../context/LoadingContext"; // Import the context
// import CustomLoader from "./CustomLoader";

// const Dashboard = () => {
//   const [data, setData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1); // Track the current page
//   const [recordsPerPage] = useState(5); // Number of records to display per page
//   const [isPageLoaded, setIsPageLoaded] = useState(false); // Track if the page content is loaded
//   const { loading, setLoading } = useLoadingContext(); // Use the loading state from the context

//   useEffect(() => {
//     setLoading(true); // Set loading to true when data fetching starts

//     // Simulate fetching data with setTimeout
//     setTimeout(() => {
//       const fetchedData = [
//         // ... your data here ...
//         {
//           id: 1,
//           individualName: "John Doe",
//           companyName: "ABC Inc.",
//           email: "john@example.com",
//           firstName: "John",
//           lastName: "Doe",
//           mobile: "123-456-7890",
//         },
//         {
//           id: 2,
//           individualName: "Jane Smith",
//           companyName: "XYZ Corp.",
//           email: "jane@example.com",
//           firstName: "Jane",
//           lastName: "Smith",
//           mobile: "987-654-3210",
//         },
//         {
//           id: 3,
//           individualName: "Alice Johnson",
//           companyName: "LMN Ltd.",
//           email: "alice@example.com",
//           firstName: "Alice",
//           lastName: "Johnson",
//           mobile: "555-555-5555",
//         },
//         {
//           id: 3,
//           individualName: "Alice Johnson",
//           companyName: "LMN Ltd.",
//           email: "alice@example.com",
//           firstName: "Alice",
//           lastName: "Johnson",
//           mobile: "555-555-5555",
//         },
//         {
//           id: 3,
//           individualName: "Alice Johnson",
//           companyName: "LMN Ltd.",
//           email: "alice@example.com",
//           firstName: "Alice",
//           lastName: "Johnson",
//           mobile: "555-555-5555",
//         },
//         {
//           id: 3,
//           individualName: "Alice Johnson",
//           companyName: "LMN Ltd.",
//           email: "alice@example.com",
//           firstName: "Alice",
//           lastName: "Johnson",
//           mobile: "555-555-5555",
//         },
//         {
//           id: 3,
//           individualName: "Alice Johnson",
//           companyName: "LMN Ltd.",
//           email: "alice@example.com",
//           firstName: "Alice",
//           lastName: "Johnson",
//           mobile: "555-555-5555",
//         },
//         {
//           id: 3,
//           individualName: "Alice Johnson",
//           companyName: "LMN Ltd.",
//           email: "alice@example.com",
//           firstName: "Alice",
//           lastName: "Johnson",
//           mobile: "555-555-5555",
//         },
//         {
//           id: 3,
//           individualName: "Alice Johnson",
//           companyName: "LMN Ltd.",
//           email: "alice@example.com",
//           firstName: "Alice",
//           lastName: "Johnson",
//           mobile: "555-555-5555",
//         },
//         {
//           id: 3,
//           individualName: "Alice Johnson",
//           companyName: "LMN Ltd.",
//           email: "alice@example.com",
//           firstName: "Alice",
//           lastName: "Johnson",
//           mobile: "555-555-5555",
//         },
//         {
//           id: 3,
//           individualName: "Alice Johnson",
//           companyName: "LMN Ltd.",
//           email: "alice@example.com",
//           firstName: "Alice",
//           lastName: "Johnson",
//           mobile: "555-555-5555",
//         },
//         {
//           id: 3,
//           individualName: "Alice Johnson",
//           companyName: "LMN Ltd.",
//           email: "alice@example.com",
//           firstName: "Alice",
//           lastName: "Johnson",
//           mobile: "555-555-5555",
//         },
//       ];
//       setData(fetchedData);
//       setIsPageLoaded(true); // Mark the page content as loaded
//       setLoading(false); // Set loading to false when data fetching is complete
//     }, 2000); // Simulated 2-second delay
//   }, [setLoading]);

//   const mainContentStyle = {
//     padding: "20px",
//   };

//   const tableStyle = {
//     width: "100%",
//     borderCollapse: "collapse",
//     border: "1px solid #ddd",
//     background: "#f2f2f2", // Background color for the table
//     color: "#333", // Text color in the table
//   };

//   const tableHeaderStyle = {
//     background: "#333",
//     color: "white", // Text color for table headers
//     padding: "10px",
//     border: "1px solid #ddd",
//     textAlign: "left",
//   };

//   const tableCellStyle = {
//     padding: "10px",
//     border: "1px solid #ddd",
//     textAlign: "left",
//   };

//   const editLinkStyle = {
//     textDecoration: "none",
//     color: "blue",
//   };

//   const newRequestLinkStyle = {
//     display: "block",
//     margin: "20px 0",
//     textDecoration: "none",
//     fontSize: "18px",
//     color: "green",
//   };

//   // Calculate the index of the first and last record for the current page
//   const indexOfLastRecord = currentPage * recordsPerPage;
//   const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
//   const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);

//   // Function to handle page change
//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div>
//       <h1
//         style={{ marginBottom: "20px", fontSize: "24px", textAlign: "center" }}
//       >
//         Dashboard
//       </h1>
//       {loading ? (
//         <CustomLoader />
//       ) : (
//         <>
//           {isPageLoaded && (
//             /* Dashboard content */
//             <div style={mainContentStyle}>
//               <table style={tableStyle}>
//                 <thead>
//                   <tr>
//                     <th style={tableHeaderStyle}>Individual Name</th>
//                     <th style={tableHeaderStyle}>Company Name</th>
//                     <th style={tableHeaderStyle}>Email</th>
//                     <th style={tableHeaderStyle}>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {currentRecords.map((item) => (
//                     <tr key={item.id}>
//                       <td style={tableCellStyle}>{item.individualName}</td>
//                       <td style={tableCellStyle}>{item.companyName}</td>
//                       <td style={tableCellStyle}>{item.email}</td>
//                       <td style={tableCellStyle}>
//                         <Link to={`/edit/${item.id}`} style={editLinkStyle}>
//                           Edit
//                         </Link>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               <Link to="/new" style={newRequestLinkStyle}>
//                 New Request
//               </Link>
//               {/* Pagination */}
//               <div style={{ textAlign: "center", marginTop: "20px" }}>
//                 {data.length > recordsPerPage && (
//                   <ul className="pagination">
//                     {Array.from(
//                       { length: Math.ceil(data.length / recordsPerPage) },
//                       (_, i) => (
//                         <li
//                           key={i}
//                           className={`page-item ${
//                             i + 1 === currentPage ? "active" : ""
//                           }`}
//                         >
//                           <button
//                             className="page-link"
//                             onClick={() => paginate(i + 1)}
//                           >
//                             {i + 1}
//                           </button>
//                         </li>
//                       )
//                     )}
//                   </ul>
//                 )}
//               </div>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default Dashboard;
