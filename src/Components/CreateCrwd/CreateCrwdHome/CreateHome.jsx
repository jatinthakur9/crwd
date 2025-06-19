import React, { useContext, useState } from "react";
import "./CreateHome.css";
import usericon from "../../../assets/images/users-icon.svg";
import arrowIcon from "../../../assets/images/solid-arrow-right.svg";
import footerimage from "../../../assets/images/footer-people.png";
import { userContext } from "../../../App";
import { useNavigate } from "react-router";
import Header from "../../Header/Header";

const CreateHome = () => {
  const navigate = useNavigate();
  const { setName, setImage, setEventName, setDescription } =
    useContext(userContext);

  const [nameInput, setNameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const [eventInput, setEventInput] = useState("");
  const [descInput, setDescInput] = useState("");

  const [errors, setErrors] = useState({});

  const handleNext = () => {
    const newErrors = {};
    if (!nameInput.trim()) newErrors.name = "Name is required";
    if (!ageInput) newErrors.age = "Image is required";
    if (!eventInput.trim()) newErrors.event = "Event Name is required";
    if (!descInput.trim()) newErrors.description = "Description is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // All fields valid → set to context
      setName(nameInput);
      setImage(ageInput);
      setEventName(eventInput);
      setDescription(descInput);
      navigate("/CreateCrwdPeople");
      console.log("done");
      // alert("All data saved in context!");
      // You can navigate or do something else here
    }
  };

  return (
    <div className="main-create">
      {/* <div className="navbar-create">
        <div className="nav-create-left">
          <img className="nav--create-icon" src={usericon} alt="user-icon" />
        </div>
        <div className="nav-create-right">
          <button className="nav-create-btn">Home</button>
          <button className="nav-create-btn">About CRWD</button>
          <button className="nav-create-btn">Join Us</button>
          <button className="createe-btn">Create CRWD</button>
        </div>
      </div> */}
      <Header />

      <div className="body-create-container">
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

                {/* <div className="input-group">
                  <label htmlFor="age">Image</label>
                  <input
                    className="ChooseImage"
                    type="File"
                    id="age"
                    value={ageInput}
                    onChange={(e) => setAgeInput(e.target.value)}
                    placeholder="Enter your age"
                  />
                  {errors.age && <p className="error-text">{errors.age}</p>}
                </div> */}

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
                          setAgeInput(reader.result); // base64 string
                          // Optional: store in localStorage too
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

      <div className="footer-create">
        <footer>
          <img className="footer-img" src={footerimage} alt="" />
        </footer>
      </div>
    </div>
  );
};

export default CreateHome;
