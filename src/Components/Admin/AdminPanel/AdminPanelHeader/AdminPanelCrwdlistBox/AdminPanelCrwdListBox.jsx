// import React from "react";
// import "./AdminPanelCrwdListBox.css";
// import { useContext, useState, useEffect } from "react";
// import { userContext } from "../../../../../App";

// const AdminPanelCrwdListBox = () => {
//   const { email, createEventTrigger } = useContext(userContext);

//   //code for popup add

//   const [showPopup, setShowPopup] = useState(false);

//   const [error, setError] = useState("");

//   const [userName, setUserName] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const [showPopupp, setShowPopupp] = useState(false);

//   // Load users

//   const openEditPopup = (index, email) => {
//     setShowPopup(true);
//   };

//   const [adminevents, setadminEvents] = useState([]);

//   useEffect(() => {
//     const users = JSON.parse(localStorage.getItem("users")) || [];
//     const allEvents = users.flatMap((user) => user.events || []);
//     setadminEvents(allEvents);
//   }, [createEventTrigger]);
//   return (
//     <div className="userListBox">
//       <div className="TopBox">
//         <h5>Users</h5>
//       </div>

//       <div className="InsideBox">
//         {adminevents.length === 0 ? (
//           <p className="text-gray-500">No crwds found.</p>
//         ) : (
//           adminevents.map((event, index) => (
//             <div key={index} className="boxField">
//               <div>
//                 <div className="userField">
//                   <p className="font-medium">{event.eventName}</p>

//                   <div className="buttonDivCrwd">
//                     <button
//                       className="editButtonn"
//                       onClick={() => openEditPopup(index, event.email)}
//                     >
//                       Join
//                     </button>

//                     {/* code for edit button */}

//                     {showPopupp && (
//                       <div
//                         className="crwd-edit-overlay"
//                         onClick={() => setShowPopupp(false)}
//                       >
//                         <div
//                           className="crwd-edit-popup"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           <div className="crwd-edit-header">
//                             <h3>Edit User</h3>
//                             <span
//                               className="crwd-edit-close"
//                               onClick={() => setShowPopupp(false)}
//                             >
//                               ×
//                             </span>
//                           </div>
//                           {errorr && (
//                             <p className="crwd-edit-error">{errorr}</p>
//                           )}
//                           <input
//                             type="text"
//                             value={userName}
//                             onChange={(e) => setUserName(e.target.value)}
//                             placeholder="Username"
//                             className="crwd-edit-input"
//                           />
//                           <input
//                             type="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             placeholder="New Password"
//                             className="crwd-edit-input"
//                           />
//                           <input
//                             type="password"
//                             value={confirmPassword}
//                             onChange={(e) => setConfirmPassword(e.target.value)}
//                             placeholder="Confirm Password"
//                             className="crwd-edit-input"
//                           />
//                           <div className="crwd-edit-actions">
//                             <button onClick={handleSavve}>Save Changes</button>
//                             <button
//                               onClick={() => setShowPopupp(false)}
//                               className="crwd-edit-cancel"
//                             >
//                               Cancel
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                     {/* code of edit  button ends here */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminPanelCrwdListBox;
import React, { useContext, useState, useEffect } from "react";
import "./AdminPanelCrwdListBox.css";
import { userContext } from "../../../../../App";

const AdminPanelCrwdListBox = () => {
  const { createEventTrigger } = useContext(userContext);

  const [adminevents, setadminEvents] = useState([]);
  const [selectedEventIndex, setSelectedEventIndex] = useState(null);
  const [joinEmail, setJoinEmail] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const allEvents = users.flatMap((user) =>
      (user.events || []).map((evt) => ({ ...evt, ownerEmail: user.email }))
    );
    setadminEvents(allEvents);
  }, [createEventTrigger]);

  const openJoinPopup = (index) => {
    setSelectedEventIndex(index);
    setJoinEmail("");
    setError("");
  };

  const closeJoinPopup = () => {
    setSelectedEventIndex(null);
    setJoinEmail("");
    setError("");
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleJoin = () => {
    if (!joinEmail.trim()) {
      setError("Email cannot be empty");
      return;
    }

    if (!isValidEmail(joinEmail)) {
      setError("Invalid email format");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const targetEvent = adminevents[selectedEventIndex];

    let updated = false;

    for (let user of users) {
      const events = user.events || [];
      for (let evt of events) {
        if (evt.id === targetEvent.id) {
          if (!Array.isArray(evt.joinedUsers)) {
            evt.joinedUsers = [];
          }

          if (evt.joinedUsers.includes(joinEmail)) {
            setError("This email has already joined.");
            return;
          }

          evt.joinedUsers.push(joinEmail);
          evt.joined = evt.joinedUsers.length.toString();
          updated = true;
          break;
        }
      }
      if (updated) break;
    }

    if (updated) {
      localStorage.setItem("users", JSON.stringify(users));

      const refreshedEvents = users.flatMap((user) =>
        (user.events || []).map((evt) => ({ ...evt, ownerEmail: user.email }))
      );
      setadminEvents(refreshedEvents);
      closeJoinPopup();
    } else {
      setError("Something went wrong. Event not found.");
    }
  };

  return (
    <div className="userListBox">
      <div className="TopBox">
        <h5>Users</h5>
      </div>

      <div className="InsideBox">
        {adminevents.length === 0 ? (
          <p className="text-gray-500">No crwds found.</p>
        ) : (
          adminevents.map((event, index) => (
            <div key={index} className="boxField">
              <div className="userField">
                <p className="font-medium">{event.eventName}</p>

                <div className="buttonDivCrwd">
                  <button
                    className="editButtonn"
                    onClick={() => openJoinPopup(index)}
                  >
                    Join
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {selectedEventIndex !== null && (
        <div className="crwd-join-overlay" onClick={closeJoinPopup}>
          <div className="crwd-join-popup" onClick={(e) => e.stopPropagation()}>
            <div className="crwd-join-header">
              <h3>Join Crowd</h3>
              <span className="crwd-join-close" onClick={closeJoinPopup}>
                ×
              </span>
            </div>
            <p className="crwd-join-count">
              Joined: {adminevents[selectedEventIndex]?.joined || 0}
            </p>
            {error && <p className="crwd-join-error">{error}</p>}
            <input
              type="email"
              value={joinEmail}
              onChange={(e) => setJoinEmail(e.target.value)}
              placeholder="Your Email"
              className="crwd-join-input"
            />
            <div className="crwd-join-actions">
              <button onClick={handleJoin}>Join</button>
              <button onClick={closeJoinPopup} className="crwd-join-cancel">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanelCrwdListBox;
