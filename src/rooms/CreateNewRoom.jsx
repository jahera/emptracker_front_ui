import React, { useState } from 'react';
import { Form, Button} from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { roomCreate } from '../services/auth';

const CreateNewRoom = () => {
  const [name, setName] = useState('');
  const [is_private, setIsPrivate] = useState('');
  const navigate = useHistory();

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("Token");
      const response = await roomCreate({room: { name, is_private}});
      // const response = await axios.post('http://localhost:3001/signup',
      // { user: { email, password, password_confirmation, authenticity_token: getMetaContent("csrf-token")} });
      navigate.push('/roomlist')
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div>
    <h1> New room </h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Input a New Task and Press Enter" value={name} onChange={(e) => setName(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check type='checkbox' label='Is Private' value={is_private} onChange={(e) => setIsPrivate(e.target.checked)}/>
        </Form.Group>
      </Form>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default CreateNewRoom;
