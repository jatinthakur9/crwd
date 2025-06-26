import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import CreateHome from "./Components/CreateCrwd/CreateCrwdHome/CreateHome";
import Home from "./Components/Home/Home";
import { createContext, useState, useEffect } from "react";
import CreateCrwdPeople from "./Components/CreateCrwd/CreateCrwdPeople/CreateCrwdPeople";
import CreateCrwdDetails from "./Components/CreateCrwd/CreateCrwdDetails/CreateCrwdDetails";
import CrwdList from "./Components/CrwdList/CrwdList";
import CrwdReviewPage from "./Components/CrwdReviewPage/CrwdReviewPage";
import ProfilePage from "./Components/ProfilePage/ProfilePage";
import ZipCode from "./Components/ZipCode/ZipCode";
import GoogleCrwdMap from "./Components/GoogleCrwdMap/GoogleCrwdMap";
import Payment from "./Components/Payment/Payment";
import JoinCrwd from "./Components/JoinCrwd/JoinCrwd";

export const userContext = createContext();

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [image, setImage] = useState("");
  const [eventName, setEventName] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [globalZipcode, setGlobalZipcode] = useState("");
  const [eventCost, setEventCost] = useState("");
  const [eventAddress, setEventAddress] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [description, setDescription] = useState("");
  const [token, setToken] = useState("");
  const [peopleCount, setPeopleCount] = useState("");
  const [crwddO, setCrwdDo] = useState("");
  const [sex, setSex] = useState("");
  const [type, setType] = useState("");
  const [age, setAge] = useState("");
  const [date, setDate] = useState("");
  const [id, setId] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");
  const [profileImage, setProfileImage] = useState();
  const [joined, setJoined] = useState("");
  const [createEventTrigger, setCreateEventTrigger] = useState(false);

  useEffect(() => {
    if (email) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const currentUser = users.find((user) => user.email === email);
      if (currentUser) {
        setUserName(currentUser.userName || "");
        setLocation(currentUser.location || "");
        setBio(currentUser.bio || "");
      }
    }
  }, [email]);

  useEffect(() => {
    if (createEventTrigger && email && eventName) {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      const updatedUsers = users.map((user) => {
        if (user.email === email) {
          const existingEvents = user.events || [];

          const newEvent = {
            id: Date.now(),
            name,
            image,
            eventName,
            description,
            peopleCount,
            crwddO,
            sex,
            type,
            age,
            date,
            zipcode,
            eventAddress,
            eventCost,
            longitude,
            latitude,
            joined,
          };

          let updatedZipcodes = user.zipcode || [];
          const locationData = {
            latitude,
            longitude,
            eventAddress,
          };

          const existingZip = updatedZipcodes.find((z) => z.code === zipcode);

          if (existingZip) {
            const locationExists = existingZip.locations.some(
              (loc) => loc.latitude === latitude && loc.longitude === longitude
            );
            if (!locationExists) {
              existingZip.locations.push(locationData);
            }
          } else {
            updatedZipcodes.push({
              code: zipcode,
              locations: [locationData],
            });
          }

          return {
            ...user,
            userName,
            location,
            bio,
            profileImage,
            zipcode: updatedZipcodes,
            globalZipcode,
            events: [...existingEvents, newEvent],
          };
        }
        return user;
      });

      localStorage.setItem("users", JSON.stringify(updatedUsers));
      setCreateEventTrigger(false);
    }
  }, [createEventTrigger]);

  return (
    <userContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        name,
        setName,
        userName,
        setUserName,
        image,
        setImage,
        eventName,
        setEventName,
        zipcode,
        setZipcode,
        globalZipcode,
        setGlobalZipcode,
        eventAddress,
        setEventAddress,
        latitude,
        setLatitude,
        longitude,
        setLongitude,
        eventCost,
        setEventCost,
        description,
        setDescription,
        token,
        setToken,
        peopleCount,
        setPeopleCount,
        crwddO,
        setCrwdDo,
        sex,
        setSex,
        age,
        setAge,
        type,
        setType,
        date,
        setDate,
        createEventTrigger,
        setCreateEventTrigger,
        id,
        setId,
        location,
        setLocation,
        bio,
        setBio,
        profileImage,
        setProfileImage,
        joined,
        setJoined,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/CreateHome" element={<CreateHome />} />
          <Route path="/CreateCrwdPeople" element={<CreateCrwdPeople />} />
          <Route path="/CreateCrwdDetails" element={<CreateCrwdDetails />} />
          <Route path="/CrwdList" element={<CrwdList />} />
          <Route path="/CrwdReviewPage" element={<CrwdReviewPage />} />
          <Route path="/ProfilePage" element={<ProfilePage />} />
          <Route path="/ZipCode" element={<ZipCode />} />
          <Route path="/GoogleCrwdMap" element={<GoogleCrwdMap />} />
          <Route path="/JoinCrwd" element={<JoinCrwd />} />
          <Route path="/Payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
