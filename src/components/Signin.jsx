import React, { useState } from 'react';
import { Form, Button} from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { signIn } from '../services/auth';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authenticity_token, setAuthenticityToken] = useState('');
  const navigate = useHistory();

  const handleSignin = async () => {
    try {
      const response = await signIn({ user:{ email, password}});
      console.log(response.data); // Handle success
      localStorage.setItem('Token', response.headers.authorization);
      // setToken(response.headers.get("Authorization"));
      localStorage.setItem('isLoggedIn', 'true');
      navigate.push('/roomlist')
    } catch (error) {
      console.error('Error signing please try again!:', error);
    }
  };

  return (
    <div>
     <h1> LogIn </h1>
      <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>
      </Form>
      <Button variant="primary" type="submit" onClick={handleSignin}>
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

export default Signin;