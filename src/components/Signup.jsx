import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');
  const [authenticity_token, setAuthenticityToken] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:3001/signup',
        { user: { email, password, password_confirmation, authenticity_token: getMetaContent("csrf-token")} });
      console.log(response.data); // Handle success
      //this.props.history.push('/Home')
      window.location.href ="/Home"
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
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
      <input name="confirm password"
        value={password_confirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
        type="password"
        placeholder="Confirm Password"/>

      <button onClick={handleSignup}>Sign Up</button>
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