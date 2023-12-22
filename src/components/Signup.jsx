import React, { useState } from 'react';
import { Form, Button} from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { signUp } from '../services/auth';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');
  const [authenticity_token, setAuthenticityToken] = useState('');
  const navigate = useHistory();

  const handleSignup = async () => {
    try {
      const response = await signUp({ email, password, password_confirmation, authenticity_token: getMetaContent("csrf-token")});
      // const response = await axios.post('http://localhost:3001/signup',
        // { user: { email, password, password_confirmation, authenticity_token: getMetaContent("csrf-token")} });
      navigate.push('/')
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div>
    <h1> Sign Up </h1>
      <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupConfirmPassword">
          <Form.Label>confirm password</Form.Label>
          <Form.Control name="confirm password" type="password" placeholder="confirm password" value={password_confirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/>
        </Form.Group>
      </Form>
      <Button variant="primary" type="submit" onClick={handleSignup}>
        Submit
      </Button>
    </div>
  );
};

export const getMetaContent = (name) => {
  var metas = document.getElementsByTagName('meta');

  for (var i=0; i<metas.length; i++) {
    if (metas[i].getAttribute("name") == name) {
      return metas[i].getAttribute("content");
    }
  }
}

export default Signup;