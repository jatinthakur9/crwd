import React, { useState, useRef, useEffect, useContext } from "react";
import "./Header.css";
import "../css/styles.css";
import userIcon from "../../assets/images/users-icon.svg";
import personImage from "../../assets/images/person-Image.jpg";
import { useNavigate } from "react-router";
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

const Header = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const leaveTimeout = useRef(null);

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const { email, profileImage, setProfileImage } = useContext(userContext);

  useEffect(() => {
    const allUsers = JSON.parse(localStorage.getItem("users"));
    console.log(allUsers);

    if (allUsers) {
      const currentUser = allUsers.find((user) => user.email === email);
      console.log(currentUser);

      if (currentUser) {
        setUserName(currentUser.userName);
        setUserEmail(currentUser.email);
        const storedImage = currentUser.profileImage;
        if (storedImage) {
          setProfileImage(storedImage);
        } else {
          setProfileImage(personImage); // default from assets
        }
      }
    }
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(leaveTimeout.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    leaveTimeout.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  const handleMyProfile = () => {
    setIsDropdownOpen(false);
    navigate("/ProfilePage");
  };

  const handleLogout = () => {
    setIsDropdownOpen(false);

    navigate("*");
  };

  return (
    <div>
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

              <div
                className="profile-dropdown"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="profile-circle">
                  <img
                    src={profileImage || personImage}
                    alt="profile"
                    className="profile-image"
                  />
                </div>

                {isDropdownOpen && (
                  <div className="dropdown-menu">
                    <div className="dropdown-header">
                      <img
                        src={profileImage || personImage}
                        alt="profile"
                        className="dropdown-profile-image"
                      />
                      <div className="user-info">
                        <span className="user-name">{userName}</span>
                        <span className="user-email">{userEmail}</span>
                      </div>
                    </div>
                    <div className="dropdown-divider"></div>
                    <div className="dropdown-item" onClick={handleMyProfile}>
                      <span>My Profile</span>
                    </div>
                    <div
                      className="dropdown-item logout-item"
                      onClick={handleLogout}
                    >
                      <span>Logout</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
