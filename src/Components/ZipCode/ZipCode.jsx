// import React, { useState } from "react";
// import "../css/styles.css";
// import "./ZipCode.css";
// import mapPlaceholder from "../../assets/images/map-placeholder.jpg";
// import globeIcon from "../../assets/images/globe-icon.svg";
// import darkArrowRight from "../../assets/images/dark-arrow-right.svg";
// import Header from "../Header/Header";
// import { useNavigate } from "react-router";
// import { useContext } from "react";
// import { userContext } from "../../App";
// import MapComponent from "../MapComponent";

// const ZipCode = () => {
//   const navigate = useNavigate();
//   const { globalZipcode, setGlobalZipcode } = useContext(userContext);
//   const [globaInput, setGlobalInput] = useState("");

//   return (
//     <div className="zip-code-page">
//       {/* Header */}
//       <Header className="fixed-header" />

//       {/* Main Content */}
//       <main
//         id="main"
//         className="content-wrapper"
//         style={{ position: "relative" }}
//       >
//         {/* Background Map Image */}
//         <img
//           className="map-cover-placeholder"
//           style={{ width: "100%", objectFit: "cover", height: "100vh" }}
//           src={mapPlaceholder}
//           alt="map"
//         />

//         {/* Overlay: Popup + Map Side-by-side */}
//         <div className="overlay-flex-wrapper">
//           {/* Popup */}
//           <div className="popup">
//             <div className="popup-overlay pb-0 dark-blue-popup">
//               <div className="popup-content">
//                 <h3 className="popup-title">Enter Your Zip Code</h3>
//                 <div className="dark-grey-field-box w-100 mw-300">
//                   <i className="icon i-28">
//                     <img src={globeIcon} alt="Globe" />
//                   </i>
//                   <input
//                     type="number"
//                     className="w-100"
//                     onChange={(e) => {
//                       setGlobalInput(e.target.value);
//                     }}
//                     placeholder="Enter Zip Code"
//                   />
//                 </div>
//                 <div className="popup-btn-wrapper btn-center">
//                   <button
//                     className="btn-search-zip half-minus"
//                     onClick={() => {
//                       setGlobalZipcode(globaInput);
//                     }}
//                   >
//                     <img src={darkArrowRight} alt="dark-arrow" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* MapComponent */}
//           <div className="map-side">
//             <MapComponent />
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default ZipCode;
import React, { useState, useContext } from "react";
import "../css/styles.css";
import "./ZipCode.css";
import mapPlaceholder from "../../assets/images/map-placeholder.jpg";
import globeIcon from "../../assets/images/globe-icon.svg";
import darkArrowRight from "../../assets/images/dark-arrow-right.svg";
import Header from "../Header/Header";
import { userContext } from "../../App";
import MapComponent from "../MapComponent";

const ZipCode = () => {
  const { setGlobalZipcode } = useContext(userContext);
  const [zipInput, setZipInput] = useState("");

  return (
    <div className="zip-code-page">
      <Header className="fixed-header" />

      <main
        id="main"
        className="content-wrapper"
        style={{ position: "relative" }}
      >
        <img
          className="map-cover-placeholder"
          style={{ width: "100%", objectFit: "cover", height: "100vh" }}
          src={mapPlaceholder}
          alt="map"
        />

        <div className="overlay-flex-wrapper">
          {/* Zip Code Input */}
          <div className="popup">
            <div className="popup-overlay pb-0 dark-blue-popup">
              <div className="popup-content">
                <h3 className="popup-title">Enter Your Zip Code</h3>
                <div className="dark-grey-field-box w-100 mw-300">
                  <i className="icon i-28">
                    <img src={globeIcon} alt="Globe" />
                  </i>
                  <input
                    type="number"
                    className="w-100"
                    placeholder="Enter Zip Code"
                    value={zipInput}
                    onChange={(e) => setZipInput(e.target.value)}
                  />
                </div>
                <div className="popup-btn-wrapper btn-center">
                  <button
                    className="btn-search-zip half-minus"
                    onClick={() => {
                      if (zipInput.trim() !== "") {
                        setGlobalZipcode(zipInput.trim());
                      }
                    }}
                  >
                    <img src={darkArrowRight} alt="dark-arrow" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Map Component */}
          <div className="map-side">
            <MapComponent />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ZipCode;
