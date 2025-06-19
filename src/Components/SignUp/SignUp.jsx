import React, { useState } from "react";
import "./SignUp.css";
import "../css/styles.css";
import logo from "../../assets/images/light-logo.svg";
import envelope from "../../assets/images/envelope-icon.svg";
import lock from "../../assets/images/lock-icon.svg";
import facebook from "../../assets/images/fb-icon.svg";
import google from "../../assets/images/google-icon.svg";
import inst from "../../assets/images/insta-icon.svg";
import userIcon from "../../assets/images/users-icon.svg";
import idCard from "../../assets/images/id-card.png";

import { useNavigate } from "react-router";
import { useContext } from "react";
import { userContext } from "../../App";

const BarsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    fill="currentColor"
  >
    <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
  </svg>
);
const SignUp = () => {
  const { setUserName, setEmail } = useContext(userContext);
  const [email, setemail] = useState("");
  const [userName, setUserNamee] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmpass] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    setMessage("");

    if (!email || !password || !confirmpass || !userName) {
      setMessage("Error: All fields are required!");
      return;
    }

    if (!email.includes("@")) {
      setMessage("Error: Invalid email format!");
      return;
    }

    if (password.length < 6) {
      setMessage("Error: Password must be at least 6 characters!");
      return;
    }

    if (password !== confirmpass) {
      setMessage("Error: Passwords do not match!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      setMessage("Error: User with this email already exists!");
    } else {
      users.push({ email, password, userName, events: [] });
      localStorage.setItem("users", JSON.stringify(users));

      setMessage("Signup successful! ");
      setUserName(userName);
      setEmail(email);

      navigate("*");

      setEmail("");
      setPassword("");
      setConfirmpass("");
      setUserNamee("");
    }
  };

  return (
    <>
      <div className="div">
        <header className="bg-dark br-30">
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
                  <a className="menu-link family-jost primary-text">
                    About CRWD
                  </a>
                </li>
                <li className="menu-item">
                  <a className="menu-link family-jost primary-text">Join Us</a>
                </li>
              </ul>
              <a className="family-jost btn btn-primary cnt-btn">Create CRWD</a>
            </nav>
          </div>
        </header>
      </div>
      <div className="login-container">
        <div className="yellow-shape" />
        <div className="login-content">
          <div className="logo-circle">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
          </div>
          <form className="login-form" onSubmit={handleSignup}>
            <h3>Name</h3>
            <div className="input-box">
              <img src={envelope} alt="Email Icon" className="icon" />
              <input
                type="text"
                id="Name"
                value={userName}
                placeholder="Jatin Thakur"
                onChange={(e) => setUserNamee(e.target.value)}
                required
              />
            </div>
            <h3>Email Address</h3>
            <div className="input-box">
              <img src={envelope} alt="Email Icon" className="icon" />
              <input
                type="email"
                id="email"
                value={email}
                placeholder="jatin@gmail.com"
                onChange={(e) => setemail(e.target.value)}
                required
              />
            </div>
            <h3>Password</h3>
            <div className="input-box">
              <img src={lock} alt="Lock Icon" className="icon" />
              <input
                type="password"
                id="password"
                value={password}
                placeholder="Enter your password..."
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <h3> Confirm Password</h3>
            <div className="input-box">
              <img src={lock} alt="Lock Icon" className="icon" />
              <input
                type="password"
                id="confirmpassword"
                value={confirmpass}
                placeholder="Enter your password..."
                onChange={(e) => setConfirmpass(e.target.value)}
                required
              />
            </div>
            <button className="login-btn" type="submit">
              SignUp →
            </button>
            {message && (
              <div
                className={`message-box ${
                  message.startsWith("Error") ? "error" : "success"
                }`}
              >
                {message}
              </div>
            )}
            <div className="social-icons">
              <div>
                <img src={facebook} alt="Facebook" className="icon" />
              </div>
              <div>
                <img src={google} alt="Google" className="icon" />
              </div>
              <div>
                <img src={inst} alt="Instagram" className="icon" />
              </div>
            </div>
            <p className="signup-text">
              Already have an account?{" "}
              <span onClick={() => navigate("/")}>Login Now</span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
