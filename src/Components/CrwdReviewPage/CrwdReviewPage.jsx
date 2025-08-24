import { useContext, useEffect, useState } from "react";
import "../css/styles.css";
import "./CrwdReviewPage.css";

import usersIcon from "../../assets/images/users-icon.svg";
import userPlaceholderImage from "../../assets/images/map-placeholder.jpg";
import personImage from "../../assets/images/person-Image.jpg";
import starIcon from "../../assets/images/star-icon.svg";
import { Navigate, useNavigate } from "react-router";
import { userContext } from "../../App";
import Header from "../Header/Header";

const CrwdReviewPage = () => {
  const { id } = useContext(userContext);
  const [eventData, setEventData] = useState(null);
  const navigate = useNavigate("");

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users"));
    if (users && id) {
      for (const user of users) {
        const matchedEvent = user.events.find((event) => event.id === id);
        if (matchedEvent) {
          setEventData(matchedEvent);
          break;
        }
      }
    }
  }, [id]);

  // useEffect(() => {
  //   document.body.classList.add("bg-dark", "p-50");
  //   document.body.classList.remove("bg-primary", "yellow-top-left-shape");

  //   const footer = document.querySelector("footer");
  //   if (footer) {
  //     footer.style.display = "none";
  //   }

  //   return () => {
  //     document.body.classList.remove("bg-dark", "p-50");
  //     document.body.classList.add("bg-primary", "yellow-top-left-shape");
  //     if (footer) {
  //       footer.style.display = "block";
  //     }
  //   };
  // }, []);

  return (
    <>
      {/* <header className="bg-dark br-30">
        <div className="header-flex">
          <div className="nav-brand">
            <a href="#" className="brand-link">
              <img src={usersIcon} alt="user-icon" />
            </a>
          </div>
          <nav className="site-navigation">
            <div className="menu-toggle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M0 96C0 78.3 14.3 64 32 64h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z" />
              </svg>
            </div>
            <ul className="navigation-menu">
              <li className="menu-item">
                <a href="#" className="menu-link family-jost primary-text">
                  Home
                </a>
              </li>
              <li className="menu-item">
                <a href="#" className="menu-link family-jost primary-text">
                  About CRWD
                </a>
              </li>
              <li className="menu-item">
                <a href="#" className="menu-link family-jost primary-text">
                  Join Us
                </a>
              </li>
            </ul>
            <a href="#" className="family-jost btn btn-primary cnt-btn">
              Create CRWD
            </a>
          </nav>
        </div>
      </header> */}
      <Header />

      <main
        id="main"
        className="content-wrapper p-30 color-with-spacing no-spacing-mobile"
        style={{ paddingTop: "130px" }}
      >
        <div className="crwd-review-container">
          <div className="back-link-wrapper">
            <a
              href="#"
              className="back-link"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width="20"
                fill="white"
                onClick={(e) => {
                  navigate("/CrwdList");
                }}
              >
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H109.3l105.4-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
              </svg>
              <span
                className="crwd-review-text"
                style={{ color: "white", fontSize: "34px", fontWeight: "bold" }}
              >
                CRWD Review
              </span>
            </a>
          </div>

          <div
            className="review-content-flex"
            style={{ display: "flex", gap: "60px", marginTop: "30px" }}
          >
            {/* <div
              className="user-profile-card"
              style={{
                background: "#1A1A1A",
                borderRadius: "20px",
                marginLeft: "35px",
                padding: "70px",
                paddingLeft: "100px",
                paddingTop: "70px",
                flex: "0 0 350px",
              }}
            >
              <div
                className="user-image-container"
                style={{ textAlign: "center" }}
              >
                <img
                  src={userPlaceholderImage}
                  alt="User"
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    border: "3px solid #F6D809",
                  }}
                />
              </div>
              <h3
                className="user-name"
                style={{
                  color: "white",
                  textAlign: "center",
                  marginTop: "15px",
                  fontSize: "22px",
                }}
              >
                {eventData?.name || "User"}
              </h3>
            </div> */}

            {/* <div class="review-profile-card">
              <div class="review-profile-card__image_wrapper">
                <img
                  src={personImage}
                  alt="Ashley Novak"
                  class="review-profile-card__image"
                />
              </div>
              <div class="review-flex flex-between">
                <h3 class="review-profile-card__name">{}</h3>
                <p class="review-profile-card__info">Tester</p>
              </div>
              <div class="review-flex flex-between">
                <div class="review-profile-card__stars">
                  <img
                    src="./assets/images/star-icon.svg"
                    class="rating-icon"
                    alt=""
                  />
                  <img
                    src="./assets/images/star-icon.svg"
                    class="rating-icon"
                    alt=""
                  />
                  <img
                    src="./assets/images/star-icon.svg"
                    class="rating-icon"
                    alt=""
                  />
                  <img
                    src="./assets/images/star-icon.svg"
                    class="rating-icon"
                    alt=""
                  />
                  <img
                    src="./assets/images/star-icon.svg"
                    class="rating-icon"
                    alt=""
                  />
                </div>
                <p class="review-profile-crwd__info">3,623 CRWDs Joined</p>
              </div>
              <div class="review-profile-card__details">
                <div class="review-text-content">
                  <p class="review-date-text-content">09/01/2024</p>
                  <p class="review-text-status">Product Shipped</p>
                </div>
                <div class="border-line"></div>
                <div class="review-text-content">
                  <p class="review-date-text-content">09/01 - 10/01</p>
                  <p class="review-text-status">Test Period</p>
                </div>
              </div>
            </div> */}
            {eventData ? (
              <div class="review-left-cont-col bg-grey w-50">
                <div class="review-profile-card">
                  <div class="review-profile-card__image_wrapper">
                    <img
                      src={personImage}
                      alt="Ashley Novak"
                      class="review-profile-card__image"
                    />
                  </div>
                  <div class="review-flex flex-between">
                    <h3 class="review-profile-card__name">{eventData.name}</h3>
                    <p class="review-profile-card__info">{eventData.sex}</p>
                  </div>
                  <div class="review-flex flex-between">
                    <div class="review-profile-card__stars">
                      <img
                        src="./assets/images/star-icon.svg"
                        class="rating-icon"
                        alt=""
                      />
                      <img
                        src="./assets/images/star-icon.svg"
                        class="rating-icon"
                        alt=""
                      />
                      <img
                        src="./assets/images/star-icon.svg"
                        class="rating-icon"
                        alt=""
                      />
                      <img
                        src="./assets/images/star-icon.svg"
                        class="rating-icon"
                        alt=""
                      />
                      <img
                        src="./assets/images/star-icon.svg"
                        class="rating-icon"
                        alt=""
                      />
                    </div>
                    <p class="review-profile-crwd__info">3,623 CRWDs Joined</p>
                  </div>
                  <div class="review-profile-card__details">
                    <div class="review-text-content">
                      <p class="review-date-text-content">09/01/2024</p>
                      <p class="review-text-status">Product Shipped</p>
                    </div>
                    <div class="border-line"></div>
                    <div class="review-text-content">
                      <p class="review-date-text-content">09/01 - 10/01</p>
                      <p class="review-text-status">Test Period</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <p style={{ color: "white" }}>Loading user details...</p>
            )}

            <div
              className="product-review-card"
              style={{
                background: "#1A1A1A",
                borderRadius: "20px",
                padding: "30px",
                width: "60%",
                marginLeft: "0px",
                marginRight: "0px",
                boxShadow: "0 0 15px rgba(255,255,255,0.1)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              {eventData ? (
                <>
                  <div
                    className="product-image-container"
                    style={{
                      width: "100%",
                      maxHeight: "220px",
                      overflow: "hidden",
                      borderRadius: "15px",
                      marginBottom: "20px",
                    }}
                  >
                    <img
                      src={eventData.image}
                      alt="Event"
                      style={{
                        width: "100%",
                        height: "220px",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                    />
                  </div>

                  <div class="product-title-flex">
                    <h3 class="product-title">{eventData.eventName}</h3>
                    <div class="rating-box">
                      <div class="label">Rating</div>
                      <div class="rating-final">
                        <span>4.5</span>
                        <img src={starIcon} alt="rating icon" />
                      </div>
                    </div>
                  </div>
                  <div class="review-desc-box">
                    <h3 class="review-desc-box-title">Crwd Review</h3>
                    <p class="review-desc-content">{eventData.description}</p>
                  </div>

                  {/* <h5
                    className="review-title"
                    style={{
                      color: "white",
                      marginBottom: "20px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: "20px",
                    }}
                  >
                    📄 <span>About CRWD</span>
                  </h5>

                  <div
                    style={{
                      color: "white",
                      lineHeight: "1.6",
                      fontSize: "16px",
                    }}
                  >
                    <p>
                      🎉 <strong>Event Name:</strong> {eventData.eventName}
                    </p>
                    <p>
                      🎂 <strong>Age Group:</strong> {eventData.age}
                    </p>
                    <p>
                      📅 <strong>Date:</strong>{" "}
                      {new Date(eventData.date).toLocaleString()}
                    </p>
                    <p>
                      🧑‍🤝‍🧑 <strong>People Count:</strong> {eventData.peopleCount}
                    </p>
                    <p>
                      🏷️ <strong>Type:</strong> {eventData.type}
                    </p>
                    <p>
                      📝 <strong>Description:</strong> {eventData.description}
                    </p>
                  </div> */}
                </>
              ) : (
                <p style={{ color: "white" }}>Loading event details...</p>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CrwdReviewPage;
