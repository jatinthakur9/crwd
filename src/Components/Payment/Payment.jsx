import React, { useContext, useEffect, useState } from "react";
import "./Payment.css";
import Header from "../Header/Header";
import { useNavigate } from "react-router";
import { userContext } from "../../App";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import footerimage from "../../assets/images/footer-people.png";

const Payment = () => {
  const { latitude, longitude } = useContext(userContext);
  const navigate = useNavigate();

  const [cardInfo, setCardInfo] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    focus: "",
  });

  const handleInputChange = (e) => {
    setCardInfo({ ...cardInfo, [e.target.name]: e.target.value });
  };

  const handleInputFocus = (e) => {
    setCardInfo({ ...cardInfo, focus: e.target.name });
  };

  const handleJoin = (e) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const updatedUsers = storedUsers.map((user) => {
      const updatedEvents = user.events.map((event) => {
        if (
          parseFloat(event.latitude) === parseFloat(latitude) &&
          parseFloat(event.longitude) === parseFloat(longitude)
        ) {
          const currentJoined = parseInt(event.joined) || 0;
          return {
            ...event,
            joined: currentJoined + 1,
          };
        }
        return event;
      });

      return {
        ...user,
        events: updatedEvents,
      };
    });

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    alert("CRWD Joined!");
    navigate("/Home");
  };

  return (
    <div className="boddy">
      <Header />
      <div className="payment-container">
        {/* <h2>Select Payment Method</h2> */}
        <Cards
          number={cardInfo.number}
          name={cardInfo.name}
          expiry={cardInfo.expiry}
          cvc={cardInfo.cvc}
          focused={cardInfo.focus}
        />

        <form onSubmit={handleJoin}>
          <input
            type="text"
            name="number"
            placeholder="Card Number"
            value={cardInfo.number}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Cardholder Name"
            value={cardInfo.name}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            required
          />
          <input
            type="text"
            name="expiry"
            placeholder="MM/YY"
            value={cardInfo.expiry}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            required
          />
          <input
            type="text"
            name="cvc"
            placeholder="CVC"
            value={cardInfo.cvc}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            required
          />
          <button type="submit">Pay & Join</button>
        </form>
      </div>
      <div className="footer-create">
        <footer>
          <img className="footer-img" src={footerimage} alt="" />
        </footer>
      </div>
    </div>
  );
};

export default Payment;
