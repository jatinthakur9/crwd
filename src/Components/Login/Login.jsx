import React, { useState, useContext } from "react";
import logo from "../../assets/images/light-logo.svg";
import envelope from "../../assets/images/envelope-icon.svg";
import lock from "../../assets/images/lock-icon.svg";
import facebook from "../../assets/images/fb-icon.svg";
import google from "../../assets/images/google-icon.svg";
import inst from "../../assets/images/insta-icon.svg";
import usericon from "../../assets/images/users-icon.svg";
import { userContext } from "../../App";
import "./Login.css";
import { useNavigate } from "react-router";

const Login = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const { setEmail, setPassword } = useContext(userContext);

  const handlelogin = (e) => {
    e.preventDefault();
    setMessage("");

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const matchedUser = users.find(
      (user) => user.email === inputEmail && user.password === inputPassword
    );

    if (matchedUser) {
      setEmail(matchedUser.email);
      setPassword(matchedUser.password);
      setMessage("Login successful!");
      navigate("/Home");
    } else {
      setMessage("Invalid email or password!");
    }
  };

  return (
    <div className="body">
      <div className="login-container">
        <nav className="navbar">
          <div className="nav-left">
            <img className="nav-icon" src={usericon} alt="user-icon" />
          </div>
          <div className="nav-right">
            <button className="nav-btn">Home</button>
            <button className="nav-btn">About CRWD</button>
            <button className="nav-btn">Join Us</button>
            <button
              className="create-btn"
              onClick={() => {
                alert("Please Login");
              }}
            >
              Create CRWD
            </button>
          </div>
        </nav>

        <div className="yellow-shape" />

        <div className="login-content">
          <div className="logo-circle">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
          </div>

          <form className="login-form" onSubmit={handlelogin}>
            <h3>Email Address</h3>
            <div className="input-box">
              <img src={envelope} alt="Email Icon" className="icon" />
              <input
                type="email"
                id="email"
                value={inputEmail}
                placeholder="jatin@gmail.com"
                onChange={(e) => setInputEmail(e.target.value)}
                required
              />
            </div>

            <h3>Password</h3>
            <div className="input-box">
              <img src={lock} alt="Lock Icon" className="icon" />
              <input
                type="password"
                id="password"
                value={inputPassword}
                placeholder="Enter your password..."
                onChange={(e) => setInputPassword(e.target.value)}
                required
              />
            </div>

            <button className="login-btn" type="submit">
              LOG IN →
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
              Don't have an account?{" "}
              <span onClick={() => navigate("/SignUp")}>Sign Up Now</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
