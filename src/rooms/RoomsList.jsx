//import React from 'react'
import React, { useState, useEffect } from 'react';
import { API_URL } from "../constants";

function RoomsList() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  // const [setLoading] = useState(true);
  // const [setError] = useState(null);

  useEffect(() => {
    async function loadRooms(){
      try{
        console.log("url=================", API_URL);
        const response = await fetch(API_URL);
        if(response.ok){
          const json = await response.json();
          setRooms(json);
        } else {
          throw response;
        }
      } catch(e) {
        setError("An errors occoured.");
        // console.log("An error occured.", e);
      } finally {
        setLoading(false);
      }
    }
    loadRooms();
  }, []);

return (
  <div> 
    { rooms.map((room) =>{
      <div key={room.id} className="post-container">
        <h2>{room.name}</h2>
        <h2>{room.is_private}</h2>
      </div>;
    })} 
  </div> 
);
};
export default RoomsList;


// import React, { Component } from "react";
// class Rooms extends Component {
//   render() {
//     return (
//       <div>
//         <div className="taskContainer">
//           <input
//             className="newTask"
//             type="text"
//             placeholder="Input a New Task and Press Enter"
//             maxLength="75"
//           />
//         </div>
//         <div className="wrapItems">
//           <ul className="listItems"></ul>
//         </div>
//       </div>
//     );
//   }
// }

