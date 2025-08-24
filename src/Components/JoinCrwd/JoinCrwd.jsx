import React, { useContext, useEffect, useState } from "react";
import "./JoinCrwd.css";
import Header from "../Header/Header";
import backArrow from "../../assets/images/arrow-back-outline.svg";
import concetImage from "../../assets/images/single-concert-image.png";
import clockIcon from "../../assets/images/clock-icon.svg";
import moneyBag from "../../assets/images/moneybag-icon.svg";
import { useNavigate } from "react-router";
import { userContext } from "../../App";
import peopleJoined from "../../assets/images/people-icon.svg";

const JoinCrwd = () => {
  const navigate = useNavigate();
  const { idChecker } = useContext(userContext);

  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users"));
    if (users && idChecker) {
      for (const user of users) {
        const matchedEvent = user.events.find(
          (event) => event.id === idChecker
        );
        if (matchedEvent) {
          setEventData(matchedEvent);
          break;
        }
      }
    }
  }, []);

  return (
    <div>
      <Header />
      <div className="joinBody">
        <main
          id="main"
          className="content-wrapper p-30"
          style={{ paddingTop: "150px" }}
        >
          <div className="container">
            <div className="top-button-flex justify-space-between">
              <a
                onClick={() => navigate("/ZipCode")}
                className="btn-with-icon text-dec-none btn-trans-light btn_30 family-urbanist"
              >
                <i className="i-50">
                  <img src={backArrow} alt="Back Icon" />
                </i>
                <span>Join CRWD</span>
              </a>
            </div>

            {eventData && (
              <div className="container-flex bg-grey br-45 p-55">
                <div className="left-cont-col w-50">
                  <div className="crwd-post-image-wrapper">
                    <img
                      src={eventData.image}
                      alt="featured"
                      className="main-crwd-post-img"
                    />
                  </div>
                </div>

                <div className="right-cont-col w-50">
                  <div className="joinFlex">
                    <div>
                      {" "}
                      <h2 className="crwd-post-title">Concert Attendance</h2>
                      <div
                        className="crwd-meta-item-wrapper"
                        style={{ marginTop: "20px" }}
                      >
                        <div className="crwd-meta-item">
                          <i className="icon i-16">
                            <img src={clockIcon} alt="Clock" />
                          </i>
                          <strong>People estimate: </strong>{" "}
                          {eventData.peopleCount}
                        </div>
                        <div className="crwd-meta-item">
                          <i className="icon i-16">
                            <img src={moneyBag} alt="Money Bag" />
                          </i>
                          <strong>Pay : </strong>
                          Rs {eventData.eventCost}
                        </div>
                      </div>
                    </div>

                    <button
                      style={{ marginLeft: "110px" }}
                      onClick={() => navigate("/Payment")}
                      type="button"
                      id="join_now_confirm"
                      className="family-urbanist btn_style btn_yellow align-selft-start"
                    >
                      <span>Join this CRWD</span>
                    </button>
                  </div>

                  <div className="meta-desc-box">
                    <div>
                      {" "}
                      <h3 className="meta-desc-box-title">About</h3>
                      <p className="meta-desc-content">
                        {eventData.description}
                      </p>
                    </div>
                  </div>

                  <div className="meta-desc-box">
                    <h3 className="meta-desc-box-title">Date</h3>
                    <p className="meta-desc-content">
                      {" "}
                      {new Date(eventData.date).toLocaleDateString("en-US", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}{" "}
                    </p>
                  </div>
                  <div className="meta-desc-box">
                    <h3 className="meta-desc-box-title">Address</h3>
                    <p className="meta-desc-content">
                      {eventData.eventAddress}
                    </p>
                  </div>
                  <div className="meta-desc-box">
                    <h3 className="meta-desc-box-title">Sex </h3>
                    <p className="meta-desc-content">{eventData.sex}</p>
                  </div>
                  <div className="meta-desc-box">
                    <h3 className="meta-desc-box-title">Allowed Age </h3>
                    <p className="meta-desc-content">{eventData.age}</p>
                  </div>
                  <div className="meta-desc-box">
                    <h3 className="meta-desc-box-title">People Joined </h3>
                    <p className="meta-desc-content">{eventData.joined}</p>
                  </div>
                </div>
              </div>
            )}

            {!eventData && (
              <div style={{ padding: "20px", textAlign: "center" }}>
                <p>Loading event data...</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default JoinCrwd;
