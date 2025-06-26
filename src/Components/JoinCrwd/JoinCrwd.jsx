import React from "react";
import "./JoinCrwd.css";
import Header from "../Header/Header";
import backArrow from "../../assets/images/arrow-back-outline.svg";
import concetImage from "../../assets/images/single-concert-image.png";
import clockIcon from "../../assets/images/clock-icon.svg";
import moneyBag from "../../assets/images/moneybag-icon.svg";
import { useNavigate } from "react-router";

const JoinCrwd = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className="joinBody">
        <main id="main" class="content-wrapper p-30">
          <div class="container">
            <div class="top-button-flex justify-space-between">
              <a
                onClick={(e) => {
                  navigate("/ZipCode");
                }}
                class="btn-with-icon text-dec-none btn-trans-light btn_30 family-urbanist"
              >
                <i class="i-50">
                  <img src={backArrow} alt="icon" />
                </i>
                <span>Join CRWD</span>
              </a>
            </div>
            <div class="container-flex bg-grey br-45 p-55">
              <div class="left-cont-col w-50">
                <div class="crwd-post-image-wrapper">
                  <img
                    src={concetImage}
                    alt="featured image"
                    class="main-crwd-post-img"
                  />
                </div>
              </div>
              <div class="right-cont-col w-50">
                <h2 class="crwd-post-title">Concert Attendance</h2>
                <div class="crwd-meta-item-wrapper">
                  <div class="crwd-meta-item">
                    <i class="icon i-16">
                      <img src={clockIcon} alt="Money Bag" />
                    </i>
                    <strong>Time estimate : </strong>1 hour
                  </div>
                  <div class="crwd-meta-item">
                    <i class="icon i-16">
                      <img src={moneyBag} alt="Money Bag" />
                    </i>
                    <strong>Pay : </strong>$50 USD
                  </div>
                </div>
                <div class="meta-desc-box">
                  <h3 class="meta-desc-box-title">About</h3>
                  <p class="meta-desc-content">
                    for this crwd, you will join over 1,000 other local
                    residents in attending the grand opening of of the new Roxy
                    Theatre in New York City. You must be on location at the
                    store opening (10:00 am) and stay until the ceremony at
                    11:oo am.
                  </p>
                </div>
                <div class="meta-desc-box">
                  <h3 class="meta-desc-box-title">Proof</h3>
                  <p class="meta-desc-content">
                    send a selfie of you at the ceremony for your payout!
                  </p>
                </div>
                <button
                  onClick={(e) => {
                    navigate("/Payment");
                  }}
                  type="button"
                  id="join_now_confirm"
                  class="family-urbanist btn_style btn_yellow align-selft-start"
                >
                  <span>Join this CRWD</span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default JoinCrwd;
