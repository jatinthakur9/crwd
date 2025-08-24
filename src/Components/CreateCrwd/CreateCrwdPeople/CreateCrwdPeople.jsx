import React from "react";
import userIcon from "../../../assets/images/users-icon.svg";
import "../../../Components/css/styles.css";
import { useState } from "react";
import footerImage from "../../../assets/images/footer-people.png";
import arrowIcon from "../../../assets/images/solid-arrow-right.svg";
import backIcon from "../../../assets/images/arrow-back-outline.svg";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { userContext } from "../../../App";
import Header from "../../Header/Header";
const BarsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    fill="currentColor"
  >
    <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
  </svg>
);

const CreateCrwdPeople = () => {
  const { setPeopleCount } = useContext(userContext);
  const navigate = useNavigate();
  const [inputCount, SetInputCount] = useState();

  const [errors, setErrors] = useState({});

  return (
    <div className="bg-primary">
      {/* <header className="bg-dark br-30">
        <div className="header-flex">
          <div className="nav-brand">
            <div className="brand-link">
              <img src={userIcon} alt="user-icon" />
            </div>
          </div>
          <nav className="site-navigation">
            <div className="menu-toggle">
              <BarsIcon />
            </div>
            <ul className="navigation-menu">
              <li className="menu-item">
                <a className="menu-link family-jost primary-text">Home</a>
              </li>
              <li className="menu-item">
                <a className="menu-link family-jost primary-text">About CRWD</a>
              </li>
              <li className="menu-item">
                <a className="menu-link family-jost primary-text">Join Us</a>
              </li>
            </ul>
            <a className="family-jost btn btn-primary cnt-btn">Create CRWD</a>
          </nav>
        </div>
      </header> */}
      <Header />

      <main
        id="main"
        className="content-wrapper p-30"
        style={{ paddingTop: "120px" }}
      >
        <div className="container">
          <form id="crwd_form" noValidate>
            <div className="top-button-flex justify-space-between">
              <button
                type="button"
                id="step_prev"
                className="btn-with-icon btn-trans-dark btn_30 family-urbanist"
              >
                <i
                  onClick={(e) => {
                    navigate("/CreateHome");
                  }}
                  className="i-50"
                >
                  <img src={backIcon} alt="icon" />
                </i>
                <span>Create Your CRWD</span>
              </button>
              <button
                type="button"
                className="btn-with-icon family-urbanist btn_style btn_dark"
                onClick={() => {
                  if (!inputCount) {
                    setErrors({ crwd_count: "Please select an option." });
                  } else {
                    setPeopleCount(inputCount);
                    navigate("/CreateCrwdDetails");
                  }
                }}
              >
                NEXT
                <img src={arrowIcon} alt="arrow" className="arrow-icon" />
              </button>
            </div>

            <div className="form-flex-wrapper">
              <div className="form-field ">
                <label
                  className="heading-dark text-center f-clamp-58 family-urbanist margin"
                  style={{ marginLeft: 300 }}
                >
                  How many people in your crwd?
                </label>
                <div
                  className="radio-flex-wrapper   "
                  style={{ marginLeft: 500, marginTop: 50 }}
                >
                  {["10-100", "100-500", "500-1000"].map((value) => (
                    <div className="radio-box" key={value}>
                      <label htmlFor={`crwd_count_${value}`}>{value}</label>
                      <input
                        id={`crwd_count_${value}`}
                        type="radio"
                        name="crwd_count"
                        value={value}
                        // checked={formData.crwd_count === value}
                        onChange={(e) => {
                          console.log("Hello");
                          SetInputCount(e.target.value);
                          console.log(inputCount);
                        }}
                      />
                      <span className="field-radio"></span>
                    </div>
                  ))}
                </div>
                {errors.crwd_count && (
                  <p className="error-message" style={{ display: "block" }}>
                    {errors.crwd_count}
                  </p>
                )}
              </div>
            </div>
          </form>
        </div>
      </main>
      {/* Footer JSX */}
      <footer>
        <img className="footer-img" src={footerImage} alt="people" />
      </footer>
    </div>
  );
};

export default CreateCrwdPeople;
