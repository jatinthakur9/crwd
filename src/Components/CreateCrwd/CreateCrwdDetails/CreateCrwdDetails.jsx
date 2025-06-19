import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../../App";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/dark.css";
import userIcon from "../../../assets/images/users-icon.svg";
import "../../../Components/css/styles.css";
import footerImage from "../../../assets/images/footer-people.png";
import backIcon from "../../../assets/images/arrow-back-outline.svg";
import tickIcon from "../../../assets/images/tick-icon.svg";
import calendarIcon from "../../../assets/images/calendar-icon.svg";
import dropdownIcon from "../../../assets/images/dropdown-icon.svg";
import Header from "../../Header/Header";

const BarsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    fill="currentColor"
  >
    <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
  </svg>
);

const CreateCrwdDetails = () => {
  const { setSex, setType, setCrwdDo, setAge, setDate, setCreateEventTrigger } =
    useContext(userContext);
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  // --- State and Logic from CrwdForm ---
  const [formData, setFormData] = useState({
    crwd_name: "",
    what_crwd_do: "",
    type: [], // Multi-select
    sex: "",
    age: "",
    datetime: null,
  });

  const validate = () => {
    const newErrors = {};
    if (!formData.what_crwd_do)
      newErrors.what_crwd_do = "This is a required field";
    if (formData.type.length === 0)
      newErrors.type = "Please select at least one type";
    if (!formData.sex) newErrors.sex = "Please select a sex";
    if (!formData.age) newErrors.age = "Please select an age range";
    if (!formData.datetime) newErrors.datetime = "Date/Time is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Update context state
      setCrwdDo(formData.what_crwd_do);
      setType(formData.type);
      setSex(formData.sex);
      setAge(formData.age);
      setDate(formData.datetime);
      setCreateEventTrigger(true);

      navigate("/CrwdList");
    } else {
      console.log("Validation failed");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handler for multi-select checkboxes (Type field)
  const handleTypeChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const newType = checked
        ? [...prev.type, value]
        : prev.type.filter((item) => item !== value);
      return { ...prev, type: newType };
    });
  };

  const handleDateChange = (selectedDates) => {
    setFormData((prev) => ({ ...prev, datetime: selectedDates[0] }));
  };

  // ... (rest of your component code is unchanged)
  // Inline styles for the "Type" multi-select buttons
  const typeButtonStyles = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 20px",
    width: "150px", // adjust width
    height: "46px",
    borderRadius: "25px", // More rounded like the image
    border: "1px solid #333", // Darker border
    backgroundColor: "#fff", // White background
    color: "#333", // Dark text
    cursor: "pointer",
    marginRight: "10px",
    marginBottom: "10px",
    transition: "background-color 0.3s, color 0.3s, border-color 0.3s",
    fontFamily: "Urbanist, sans-serif",
    fontSize: "16px",
    fontWeight: "500",
    minWidth: "120px", // Ensure consistent width
  };

  const typeButtonCheckedStyles = {
    backgroundColor: "#222222", // Dark background when checked
    color: "#FFD700", // Yellow text when checked
    borderColor: "#333", // Dark border when checked
  };

  const hiddenCheckboxStyle = {
    position: "absolute",
    opacity: 0,
    width: 0,
    height: 0,
  };

  // Inline style for the Flatpickr input to make it smaller
  // const flatpickrInputStyle = {
  //   backgroundColor: "pink",
  //   minWidth: "200px", // Adjusted to make it smaller
  //   width: "auto", // Allow it to shrink if content is less than min-width
  //   flexGrow: 1, // Allow it to take available space
  //   border: "none", // Remove default input border if your design handles it
  //   outline: "none", // Remove outline on focus
  //   padding: "0 10px", // Add some padding
  //   // backgroundColor: "transparent", // Make background transparent to show parent div's background
  //   color: "white", // Inherit text color
  //   fontFamily: "inherit",
  //   fontSize: "inherit",
  // };

  return (
    <div className="bg-primary">
      <Header />

      <main id="main" className="content-wrapper p-30">
        <div className="container">
          <form id="crwd_form" noValidate onSubmit={handleSubmit}>
            <div className="top-button-flex justify-space-between">
              <button
                type="button"
                id="step_prev"
                className="btn-with-icon btn-trans-dark btn_30 family-urbanist"
              >
                <i
                  onClick={(e) => {
                    navigate("/CreateCrwdPeople");
                  }}
                  className="i-50"
                >
                  <img src={backIcon} alt="icon" />
                </i>
                <span>Create Your CRWD</span>
              </button>
            </div>

            <div className="form-flex-wrapper">
              {/* What will your crwd do? */}
              <div className="form-field w-50 " style={{ flex: "1 1 48%" }}>
                {" "}
                {/* Adjusted width for flex container */}
                <label className="field-label family-urbanist">
                  What will your crwd do?
                </label>
                <div className="radio-flex-wrapper">
                  {[
                    "App/game downloads",
                    "in store purchase",
                    "event attendance",
                  ].map((item) => (
                    <div className="radio-box" key={item}>
                      <label htmlFor={item.replace(/\s+/g, "_")}>{item}</label>
                      <input
                        id={item.replace(/\s+/g, "_")}
                        type="radio"
                        name="what_crwd_do"
                        value={item}
                        checked={formData.what_crwd_do === item}
                        onChange={handleChange}
                      />
                      <span className="field-radio"></span>
                    </div>
                  ))}
                </div>
                {errors.what_crwd_do && (
                  <p className="error-message" style={{ display: "block" }}>
                    {errors.what_crwd_do}
                  </p>
                )}
              </div>
              {/* Type (Multi-select with button-like UI) */}
              <div className="form-field" style={{ flex: "1 1 50%" }}>
                {" "}
                {/* Adjusted width for flex container */}
                <label className="field-label family-urbanist">Type</label>
                <div
                  className="radio-flex-wrapper"
                  style={{ flexWrap: "wrap", marginTop: "10px" }}
                >
                  {["Adult", "Children", "Old"].map((value) => (
                    <label
                      key={value}
                      style={{
                        ...typeButtonStyles,
                        ...(formData.type.includes(value)
                          ? typeButtonCheckedStyles
                          : {}),
                      }}
                    >
                      <input
                        type="checkbox"
                        name="type"
                        value={value}
                        checked={formData.type.includes(value)}
                        onChange={handleTypeChange}
                        style={hiddenCheckboxStyle}
                      />
                      {value}
                    </label>
                  ))}
                </div>
                {errors.type && (
                  <p className="error-message" style={{ display: "block" }}>
                    {errors.type}
                  </p>
                )}
              </div>
              {/* Sex */}
              <div className="form-field w-30 ">
                <label className="field-label family-urbanist">Sex</label>
                <div className="radio-flex-wrapper">
                  {["Male", "Female", "Nonbinary"].map((value) => (
                    <div className="radio-box" key={value}>
                      <label htmlFor={`sex_${value}`}>{value}</label>
                      <input
                        id={`sex_${value}`}
                        type="radio"
                        name="sex"
                        value={value}
                        checked={formData.sex === value}
                        onChange={handleChange}
                      />
                      <span className="field-radio"></span>
                    </div>
                  ))}
                </div>
                {errors.sex && (
                  <p className="error-message" style={{ display: "block" }}>
                    {errors.sex}
                  </p>
                )}
              </div>

              {/* Age */}
              <div className="form-field w-0" style={{ marginLeft: "282px" }}>
                <label className="field-label family-urbanist">Age</label>
                <div className="radio-flex-wrapper">
                  {["18-21", "21-30", "30-50", "50+"].map((value) => (
                    <div className="radio-box" key={value}>
                      <label htmlFor={`age_${value}`}>{value}</label>
                      <input
                        id={`age_${value}`}
                        type="radio"
                        name="age"
                        value={value}
                        checked={formData.age === value}
                        onChange={handleChange}
                      />
                      <span className="field-radio"></span>
                    </div>
                  ))}
                </div>
                {errors.age && (
                  <p className="error-message" style={{ display: "block" }}>
                    {errors.age}
                  </p>
                )}
              </div>

              {/* Activation Time/Date */}
              <div className="form-field w-30">
                {" "}
                {/* Retained w-100 as it should take full width below the pair */}
                <label className="field-label family-urbanist">
                  Activation Time/Date
                </label>
                <div
                  className="date-field"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    minWidth: "300px",
                  }}
                >
                  <span className="icon">
                    <img src={calendarIcon} alt="cal-icon" />
                  </span>
                  <Flatpickr
                    value={formData.datetime}
                    options={{
                      enableTime: true,
                      dateFormat: "F j, Y - h:i K",
                      altInput: true,
                      altFormat: "F j, Y - h:i K",
                      appendTo: document.body,
                      altInputClass: "custom-flatpickr-input", // 👈 Add this
                    }}
                    onChange={handleDateChange}
                    className="hidden-flatpickr" // this one is hidden when altInput is true
                    placeholder="Select Date and Time"
                  />

                  <span className="dropdown" style={{ marginLeft: "auto" }}>
                    <img src={dropdownIcon} alt="dropdown-icon" />
                  </span>
                </div>
                {errors.datetime && (
                  <p className="error-message" style={{ display: "block" }}>
                    {errors.datetime}
                  </p>
                )}
              </div>
              {/* Submit Button */}
              <div className="button-wrapper-full flex-end">
                <button
                  type="submit"
                  className="btn-with-icon family-urbanist btn_style btn_dark"
                >
                  <span>Create CRWD</span>
                  <i className="yellow-icon i-16">
                    <img src={tickIcon} alt="icon" />
                  </i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
      {/* Footer JSX */}
      <footer>
        <img className="footer-img" src={footerImage} alt="people" />
      </footer>
    </div>
  );
};

export default CreateCrwdDetails;
