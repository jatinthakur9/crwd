import React, { useEffect, useInsertionEffect, useState } from "react";

import "../css/styles.css";
import "./ProfilePage.css";

import arrowBackOutline from "../../assets/images/arrow-back-outline.svg";
import personImage from "../../assets/images/person-Image.jpg";
import locationIcon from "../../assets/images/location-icon.svg";
import starIcon from "../../assets/images/star-icon.svg";

import userIcon from "../../assets/images/users-icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { userContext } from "../../App";

import { useNavigate } from "react-router";
import { useRef } from "react";
import Header from "../Header/Header";

const BarsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    fill="currentColor"
  >
    <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
  </svg>
);

const ProfilePage = () => {
  const {
    email,
    setLocation,
    location,
    userName,
    setUserName,
    bio,
    setBio,
    profileImage,
    setProfileImage,
  } = useContext(userContext);
  //for name
  const [namep, setNamep] = useState("");

  const [showNameField, setShowNameField] = useState(false);
  const [inputNameValue, setInputNameValue] = useState("");
  //for location
  const [locationp, setLocationp] = useState("");
  const [showLocationField, setShowLocationField] = useState(false);
  const [inputLocationValue, setInputLocationValue] = useState();
  //for bio
  const [biop, setBiop] = useState("Your Bio");
  const [showBioField, setShowBioField] = useState(false);
  const [inputBioValue, setInputBioValue] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const allUsers = JSON.parse(localStorage.getItem("users"));
    console.log(allUsers);

    if (allUsers) {
      const currentUser = allUsers.find((user) => user.email === email);
      console.log(currentUser);

      if (currentUser) {
        setNamep(currentUser.userName || "Jatinnn Thakur");

        setLocationp(currentUser.location || "Chandigarh");
        setBiop(currentUser.bio);
      }
    }
  }, [email]);

  useEffect(() => {
    if (email) {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      const updatedUsers = users.map((user) => {
        if (user.email === email) {
          return {
            ...user,
            userName: userName,
          };
        }
        return user;
      });

      localStorage.setItem("users", JSON.stringify(updatedUsers));
    }
  }, [userName, email]);

  useEffect(() => {
    if (email) {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      const updatedUsers = users.map((user) => {
        if (user.email === email) {
          return {
            ...user,
            location: location,
          };
        }
        return user;
      });

      localStorage.setItem("users", JSON.stringify(updatedUsers));
    }
  }, [location, email]);

  useEffect(() => {
    if (email) {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      const updatedUsers = users.map((user) => {
        if (user.email === email) {
          return {
            ...user,
            bio: bio,
          };
        }
        return user;
      });

      localStorage.setItem("users", JSON.stringify(updatedUsers));
    }
  }, [bio, email]);

  //image code
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (email) {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      const updatedUsers = users.map((user) => {
        if (user.email === email) {
          return {
            ...user,
            profileImage: profileImage,
          };
        }
        return user;
      });

      localStorage.setItem("users", JSON.stringify(updatedUsers));
    }
  }, [profileImage]);

  useEffect(() => {
    //up
    const allUsers = JSON.parse(localStorage.getItem("users"));
    console.log(allUsers);

    if (allUsers) {
      const currentUser = allUsers.find((user) => user.email === email);
      console.log(currentUser);

      if (currentUser) {
        const storedImage = currentUser.profileImage;
        if (storedImage) {
          setProfileImage(storedImage);
        } else {
          setProfileImage(personImage); // default from assets
        }
      }
    }
    //before
  }, []);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result;
        setProfileImage(base64Image);
        // localStorage.setItem("profileImage", base64Image);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="yellowShape" />

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
                <a
                  onClick={() => navigate("/Home")}
                  className="menu-link family-jost primary-text"
                >
                  Home
                </a>
              </li>
              <li className="menu-item">
                <a
                  onClick={() => navigate("/CrwdList")}
                  className="menu-link family-jost primary-text"
                >
                  About CRWD
                </a>
              </li>
              <li className="menu-item">
                <a className="menu-link family-jost primary-text">Join Us</a>
              </li>
            </ul>

            <div className="header-right">
              <a
                onClick={() => navigate("/CreateHome")}
                className="family-jost btn btn-primary cnt-btn"
              >
                Create CRWD
              </a>
            </div>
          </nav>
        </div>
      </header> */}
      <Header />
      <main
        id="main"
        className="content-wrapper p-30 color-with-spacing no-spacing-mobile"
      >
        <div className="container">
          <div className="top-button-flex justify-space-between">
            <a className="btn-with-icon text-dec-none btn-trans-dark btn_30 family-urbanist">
              <span>Profile Managment </span>
            </a>
          </div>
          <div className="profile-box">
            <div className="profile-card">
              <div className="profile-card-top">
                {/* <div className="profile-header">
                  <img
                    style={{ border: "5px solid #ffc93f" }}
                    className="profile-image"
                    src={personImage}
                    alt="Mark Adwin"
                  />
                </div> */}
                <div className="profile-header">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="profile-image"
                    style={{ border: "5px solid #ffc93f", cursor: "pointer" }}
                    onClick={handleImageClick}
                  />
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                  />
                </div>
                <div className="profile-info">
                  {showNameField ? (
                    <div className="edit-field">
                      {" "}
                      <input
                        type="text"
                        value={inputNameValue}
                        onChange={(e) => {
                          setInputNameValue(e.target.value);
                        }}
                      />{" "}
                      <FontAwesomeIcon
                        icon={faCheck}
                        onClick={(e) => {
                          setShowNameField(false);
                          setNamep(inputNameValue);
                          setUserName(inputNameValue);
                        }}
                        className="edit-icon-check"
                      />
                    </div>
                  ) : (
                    <div className="edit-name">
                      <h2 className="profile-user-name">{namep}</h2>
                      <FontAwesomeIcon
                        icon={faPencil}
                        onClick={(e) => {
                          setInputNameValue(namep);
                          setShowNameField(true);
                        }}
                        className="edit-icon-pencil"
                      />
                    </div>
                  )}

                  <p className="profile-user-location">
                    {showLocationField ? (
                      <div className="edit-field-location">
                        {" "}
                        <input
                          type="text"
                          value={inputLocationValue}
                          onChange={(e) => {
                            setInputLocationValue(e.target.value);
                          }}
                        />{" "}
                        <FontAwesomeIcon
                          icon={faCheck}
                          onClick={(e) => {
                            setShowLocationField(false);
                            setLocationp(inputLocationValue);

                            setLocation(inputLocationValue);
                          }}
                          className="edit-icon-check"
                        />
                      </div>
                    ) : (
                      <div className="edit-location">
                        <i className="icon i-20">
                          <img src={locationIcon} alt="location-icon" />
                        </i>
                        {locationp}
                        <FontAwesomeIcon
                          icon={faPencil}
                          onClick={(e) => {
                            setInputLocationValue(locationp);
                            setShowLocationField(true);
                          }}
                          className="edit-icon-pencil"
                        />
                      </div>
                    )}
                  </p>
                  <div className="profile-user-stats">
                    <div className="profile-user-stat-box">
                      <span className="profile-user-stat-number">0</span>
                      <span className="profile-user-stat-label">
                        # Of CRWD Joined
                      </span>
                    </div>
                    <div className="profile-user-stat-box rating-box">
                      <span className="profile-user-stat-number">
                        0
                        <i className="icon">
                          <img src={starIcon} alt="rating-icon" />
                        </i>
                      </span>
                      <span className="profile-user-stat-label">Rating</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="profile-user-bio">
                <div className="edit-bio">
                  <h3
                    className="profile-user-bio-title "
                    style={{
                      marginTop: "7px",
                      fontSize: "25px",
                    }}
                  >
                    Bio
                  </h3>{" "}
                  <FontAwesomeIcon
                    icon={faPencil}
                    onClick={(e) => {
                      setInputBioValue(biop);
                      setShowBioField(true);
                    }}
                    className="edit-icon-pencil"
                  />
                </div>
                {showBioField ? (
                  <div className="edit-field-bio">
                    {" "}
                    <textarea
                      type="text"
                      value={inputBioValue}
                      onChange={(e) => {
                        setInputBioValue(e.target.value);
                      }}
                    />{" "}
                    <FontAwesomeIcon
                      icon={faCheck}
                      onClick={(e) => {
                        setShowBioField(false);
                        setBiop(inputBioValue);
                        setBio(inputBioValue);
                      }}
                      className="edit-icon-check"
                    />
                  </div>
                ) : (
                  <p className="profile-user-bio-content">{biop}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProfilePage;
