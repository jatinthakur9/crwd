import React, { useCallback, useContext, useEffect, useState } from "react";
import "./MapComponent.css";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  InfoWindow,
} from "@react-google-maps/api";
import "./MapComponent.css"; // Add this line to import custom styles
import { useNavigate } from "react-router";
import { userContext } from "../App";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const defaultCenter = {
  lat: 30.7116,
  lng: 76.694,
};

const libraries = ["geometry", "places"];

const MapComponent = () => {
  const { setLatitude, setLongitude } = useContext(userContext);
  const navigate = useNavigate();
  const [markers, setMarkers] = useState([]);
  const [activeInfoWindow, setActiveInfoWindow] = useState(null);
  const [hovered, setHovered] = useState(false);

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCdorSQbTE5_026OwWE1-srwRImAwnQzys",
    libraries: libraries,
  });

  useEffect(() => {
    try {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      let allMarkers = [];

      users.forEach((user) => {
        user.events?.forEach((event) => {
          const lat = parseFloat(event.latitude);
          const lng = parseFloat(event.longitude);

          if (!isNaN(lat) && !isNaN(lng)) {
            allMarkers.push({
              id: `${event.id}-${lat}-${lng}`,
              lat,
              lng,
              eventName: event.eventName || "",
              eventAddress: event.eventAddress || "",
              eventCost: event.eventCost || "",
              peopleCount: event.peopleCount || "",
              description: event.description || "",
              image: event.image || "",
              date: event.date || "",
              name: event.name || "",
            });
          }
        });
      });

      setMarkers(allMarkers);
    } catch (error) {
      console.error("Error parsing users data from localStorage:", error);
    }
  }, []);

  const handleMarkerHover = useCallback((marker) => {
    setActiveInfoWindow(marker);
    setHovered(true);
  }, []);

  const handleMarkerOut = useCallback(() => {
    setTimeout(() => {
      if (!hovered) {
        setActiveInfoWindow(null);
      }
    }, 200);
  }, [hovered]);

  const handleInfoWindowMouseEnter = () => setHovered(true);
  const handleInfoWindowMouseLeave = () => {
    setHovered(false);
    setTimeout(() => {
      if (!hovered) {
        setActiveInfoWindow(null);
      }
    }, 200);
  };

  if (loadError) {
    return <div>Error loading Google Maps: {loadError.message}</div>;
  }

  if (!isLoaded) {
    return <div>Loading map...</div>;
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={defaultCenter}
      zoom={13}
    >
      {markers.map((marker) => (
        <Marker
          key={marker.id}
          position={{ lat: marker.lat, lng: marker.lng }}
          onMouseOver={() => handleMarkerHover(marker)}
          onMouseOut={handleMarkerOut}
        />
      ))}

      {activeInfoWindow && (
        <InfoWindow
          className="hello"
          position={{ lat: activeInfoWindow.lat, lng: activeInfoWindow.lng }}
          onCloseClick={() => setActiveInfoWindow(null)}
        >
          <div
            className="custom-info-window"
            onMouseEnter={handleInfoWindowMouseEnter}
            onMouseLeave={handleInfoWindowMouseLeave}
          >
            {activeInfoWindow.image && (
              <img
                src={activeInfoWindow.image}
                alt="event"
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  marginBottom: "10px",
                }}
              />
            )}
            <h3>{activeInfoWindow.eventName}</h3>
            <p>
              <strong>Location:</strong> {activeInfoWindow.eventAddress}
            </p>
            <p>
              <strong>Cost:</strong> {activeInfoWindow.eventCost}
            </p>
            <p>
              <strong>People:</strong> {activeInfoWindow.peopleCount}
            </p>
            <p>
              <strong>Description:</strong> {activeInfoWindow.description}
            </p>

            <button
              onClick={() => {
                setLatitude(activeInfoWindow.lat);
                setLongitude(activeInfoWindow.lng);
                navigate("/Payment");
                setActiveInfoWindow(null);
              }}
              style={{
                backgroundColor: "#007bff",
                color: "white",
                padding: "8px 15px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "1rem",
                fontWeight: "bold",
                marginTop: "10px",
              }}
            >
              Join
            </button>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default React.memo(MapComponent);
