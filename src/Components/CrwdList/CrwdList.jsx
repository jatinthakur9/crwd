import React, { useState, useEffect, useContext } from "react";
import "./CrwdList.css";
import userIcon from "../../assets/images/users-icon.svg";
import "../../Components/css/styles.css";
import footerImage from "../../assets/images/footer-people.png";
import arrowIcon from "../../assets/images/arrow-back-outline.svg";
import backIcon from "../../assets/images/arrow-back-outline.svg";
import { useNavigate } from "react-router";
import { userContext } from "../../App";
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

const CrwdList = () => {
  const { email, setPeopleCount, setId } = useContext(userContext);
  const [events, setEvents] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8); // Show 8 initially

  const navigate = useNavigate();

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const currentUser = users.find((user) => user.email === email);
    if (currentUser && currentUser.events) {
      setEvents(currentUser.events);
    }
  }, [email]);

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
                <a href="/#" className="menu-link family-jost primary-text">
                  Home
                </a>
              </li>
              <li className="menu-item">
                <a href="/#" className="menu-link family-jost primary-text">
                  About CRWD
                </a>
              </li>
              <li className="menu-item">
                <a href="/#" className="menu-link family-jost primary-text">
                  Join Us
                </a>
              </li>
            </ul>
            <a
              onClick={() => navigate("/CreateHome")}
              className="family-jost btn btn-primary cnt-btn"
            >
              Create CRWD
            </a>
          </nav>
        </div>
      </header> */}
      <Header />

      <div className="events-container">
        <h2 className="header">My Events</h2>
        <div className="cards-wrapper">
          {events.length > 0 ? (
            events.slice(0, visibleCount).map((event) => (
              <div
                className="event-card"
                key={event.id}
                onClick={(e) => {
                  setId(event.id);
                  navigate("/CrwdReviewPage");
                }}
              >
                <img src={event.image} alt={event.eventName} />
                <h3>{event.eventName.toUpperCase()}</h3>

                <p>
                  {/* <strong></strong> {new Date(event.date).toLocaleString()} */}
                  {/* <strong>Event Date:</strong>{" "} */}
                  <div
                    style={{ display: "flex", gap: "120px", flexWrap: "wrap" }}
                  >
                    <span>
                      {new Date(event.date).toLocaleDateString("en-US", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                    <span>
                      {new Date(event.date).toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      })}
                    </span>
                  </div>
                </p>
              </div>
            ))
          ) : (
            <p>No events found.</p>
          )}
        </div>

        {visibleCount < events.length && (
          <button
            className="load-more-btn"
            onClick={() => setVisibleCount((prev) => prev + 4)}
          >
            Load More
          </button>
        )}
      </div>

      <footer>
        <img className="footer-img" src={footerImage} alt="people" />
      </footer>
    </div>
  );
};

export default CrwdList;
