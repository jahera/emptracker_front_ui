import React, { useState, useEffect } from 'react';
import { API_URL } from "../constants";
import { roomList, roomDestry } from '../services/auth';
import Table from 'react-bootstrap/Table';
import { useHistory } from "react-router-dom";



function RoomsList() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useHistory();

  useEffect(() => {
    async function loadRooms(){
      try{
        const response = await roomList();
        if(response.ok){
          const json = await response.json();
          // console.log("ttttttttt" + JSON.stringify(json))
          return setRooms(json)
        } else {
          throw response;
        }
      } catch(e) {
        setError("An errors occoured.");
        console.log("An error occured.", e);
      } finally {
        setLoading(false);
      }
    }
    loadRooms();
  }, []);


  async function addNewRoom(){
    navigate.push('/createnewroom')
  }

  async function removeRoomList(id){
    try {
      const response = await roomDestry(id);
      // const response = await axios.post('http://localhost:3001/signup',
      // { user: { email, password, password_confirmation, authenticity_token: getMetaContent("csrf-token")} });
      navigate.push('/roomlist')
    } catch (error) {
      console.error('Error signing up:', error);
    }
  }

  // removeRoomList = (id) => {
  //   axios
  //     .delete(`http://localhost:3001/api/v1/rooms${id}`)
  //     .then((res) => {
  //       const rmlistIndex = this.state.rmlists.findIndex((x) => x.id === id);
  //       const rmlists = update(this.state.rmlists, {
  //         $splice: [[rmlistIndex, 1]],
  //       });
  //       this.setState({
  //         rmlists: rmlists,
  //       });
  //     })
  //     .catch((error) => console.log(error));
  // };

return (
  <>
    <div>
      <button onClick={addNewRoom}>New Room</button>
    </div>
  <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Is private</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {rooms.map((room, index) => {
          return (
            <tr>
              <td>{room.id}</td>
              <td>{room.name}</td>
              <td>{room.is_private}</td>
              <td>
              <button className="btn btn-danger btn-xs" onClick={() => removeRoomList(room.id)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  </>
  );
};

export default RoomsList;
