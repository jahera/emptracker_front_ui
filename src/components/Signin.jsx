import React, { useState } from 'react';
import axios from 'axios';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authenticity_token, setAuthenticityToken] = useState('');

  const handleSignin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/login',
        { user: { email, password} });
      console.log(response.data); // Handle success
      localStorage.setItem('Token', response.headers.authorization);
      const saved = localStorage.getItem("Token");
      console.log(saved); 
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignin}>Login</button>
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