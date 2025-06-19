import React from "react";
import "./Home.css";
import usericon from "../../assets/images/users-icon.svg";
import { useNavigate } from "react-router";
import Header from "../Header/Header";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="main-container">
      {/* this is the navbar */}
      <Header />
      {/* <div className="navbar">
        <div className="nav-left">
          <img className="nav-icon" src={usericon} alt="user-icon" />
        </div>
        <div className="nav-right">
          <button
            className="nav-btn"
            onClick={() => {
              navigate("/Home");
            }}
          >
            Home
          </button>

          <button
            onClick={(e) => {
              navigate("/CrwdList");
            }}
            className="nav-btn"
          >
            About CRWD
          </button>
          <button className="nav-btn">Join Us</button>
          <button
            className="create-btn"
            onClick={() => {
              navigate("/CreateHome");
            }}
          >
            Create CRWD
          </button>
        </div>
      </div> */}
      {/* this is the body where their will the buttons and fields  */}
      <div className="body-container">
        <p>This is the home page</p>
      </div>
    </div>
  );
};

export default Home;
