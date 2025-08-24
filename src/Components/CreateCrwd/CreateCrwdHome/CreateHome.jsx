import React, { useContext, useState } from "react";
import "./CreateHome.css";
import usericon from "../../../assets/images/users-icon.svg";
import arrowIcon from "../../../assets/images/solid-arrow-right.svg";
import footerimage from "../../../assets/images/footer-people.png";
import { userContext } from "../../../App";
import { useNavigate } from "react-router";
import Header from "../../Header/Header";
import { useEffect, useRef } from "react";

const CreateHome = () => {
  const navigate = useNavigate();
  const {
    setName,
    setImage,
    setEventName,
    setDescription,
    setZipcode,
    setEventCost,
    setEventAddress,
    setLatitude,
    setLongitude,
  } = useContext(userContext);

  const [nameInput, setNameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const [eventInput, setEventInput] = useState("");
  const [zipcodeInput, setZipcodeInput] = useState("");
  const [eventCostinput, setEventCostInput] = useState("");
  const [eventAddressInput, setEventAddressInput] = useState("");
  const [latitudeInput, setLatitudeInput] = useState("");
  const [longitudeInput, setLongitudeInput] = useState("");
  const [descInput, setDescInput] = useState("");

  const [errors, setErrors] = useState({});

  const handleNext = () => {
    const newErrors = {};
    if (!nameInput.trim()) newErrors.name = "Name is required";
    if (!ageInput) newErrors.age = "Image is required";
    if (!eventInput.trim()) newErrors.event = "Event Name is required";
    if (!descInput.trim()) newErrors.description = "Description is required";
    if (!latitudeInput.trim()) newErrors.latitude = "Latitude is required";
    if (!longitudeInput.trim()) newErrors.longitude = "Longitude is required";

    if (!zipcodeInput.trim()) newErrors.zipcode = "Zipcode is required";
    if (!eventCostinput.trim()) newErrors.eventCost = "Event cost is required";
    if (!eventAddressInput.trim()) newErrors.address = "Address is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // All fields valid → set to context
      setName(nameInput);
      setImage(ageInput);
      setEventName(eventInput);
      setZipcode(zipcodeInput);
      setEventCost(eventCostinput);
      setEventAddress(eventAddressInput);
      setLatitude(latitudeInput);
      setLongitude(longitudeInput);
      setDescription(descInput);

      navigate("/CreateCrwdPeople");
      console.log("done");
    }
  };

  return (
    <div className="main-create">
      <Header />

      <div className="body-create-container   " style={{ paddingTop: "100px" }}>
        <div className="body-create-box">
          <div className="heading-create-box">
            <span className="span-text">Create Your CRWD</span>
            <button
              className="btn-with-icon family-urbanist btn_style btn_dark"
              onClick={handleNext}
            >
              NEXT
              <img src={arrowIcon} alt="arrow" className="arrow-icon" />
            </button>
          </div>

          <div className="form-create-box">
            <form className="create-form" onSubmit={(e) => e.preventDefault()}>
              <div className="input-row">
                <div className="input-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    placeholder="Enter your name"
                  />
                  {errors.name && <p className="error-text">{errors.name}</p>}
                </div>

                <div className="input-group">
                  <label htmlFor="fileInput"> Event Image</label>

                  <input
                    type="file"
                    id="fileInput"
                    className="file-input"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                          setAgeInput(reader.result);
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                  />

                  <label htmlFor="fileInput" className="custom-file-label">
                    {ageInput ? "Uploaded" : "Choose File"}
                  </label>

                  {errors.age && <p className="error-text">{errors.age}</p>}
                </div>

                <div className="input-group">
                  <label htmlFor="eventName">Event Name</label>
                  <input
                    type="text"
                    id="eventName"
                    value={eventInput}
                    onChange={(e) => setEventInput(e.target.value)}
                    placeholder="Enter event name"
                  />
                  {errors.event && <p className="error-text">{errors.event}</p>}
                </div>
              </div>
              <div className="input-row">
                <div className="input-group">
                  <label htmlFor="eventAddress">Event Address</label>
                  <input
                    type="text"
                    id="eventAddress"
                    value={eventAddressInput}
                    onChange={(e) => setEventAddressInput(e.target.value)}
                    placeholder="Enter your event address"
                  />
                  {errors.address && (
                    <p className="error-text">{errors.address}</p>
                  )}
                </div>
                <div className="input-group">
                  <label htmlFor="name"> Latitude</label>
                  <input
                    type="number"
                    id="name"
                    value={latitudeInput}
                    onChange={(e) => setLatitudeInput(e.target.value)}
                    placeholder="Your Area Latitude"
                  />
                  {errors.longitude && (
                    <p className="error-text">{errors.longitude}</p>
                  )}
                </div>

                <div className="input-group">
                  <label htmlFor="eventName">Longitude</label>
                  <input
                    type="number"
                    id="eventName"
                    value={longitudeInput}
                    onChange={(e) => setLongitudeInput(e.target.value)}
                    placeholder="Your Area Longitude"
                  />
                  {errors.longitude && (
                    <p className="error-text">{errors.longitude}</p>
                  )}
                </div>
              </div>
              <div className="input-row-last ">
                <div className="input-group-last">
                  <label htmlFor="name"> Zipcode</label>
                  <input
                    type="text"
                    id="name"
                    value={zipcodeInput}
                    onChange={(e) => setZipcodeInput(e.target.value)}
                    placeholder="Your Area Zipcode"
                  />
                  {errors.zipcode && (
                    <p className="error-text">{errors.zipcode}</p>
                  )}
                </div>

                <div className="input-group-last">
                  <label htmlFor="eventName">Event Cost</label>
                  <input
                    type="text"
                    id="eventName"
                    value={eventCostinput}
                    onChange={(e) => setEventCostInput(e.target.value)}
                    placeholder="Enter event Cost in Rupees"
                  />
                  {errors.eventCost && (
                    <p className="error-text">{errors.eventCost}</p>
                  )}
                </div>
              </div>

              <label htmlFor="description">Event Description</label>
              <textarea
                id="description"
                value={descInput}
                onChange={(e) => setDescInput(e.target.value)}
                placeholder="Describe your event"
                rows="4"
              ></textarea>
              {errors.description && (
                <p className="error-text">{errors.description}</p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* <div className="footer-create">
        <footer>
          <img className="footer-img" src={footerimage} alt="" />
        </footer>
      </div> */}
    </div>
  );
};

export default CreateHome;
