import React from 'react';
import { useHistory } from "react-router-dom";

const  Authprovider = () => {
   const navigate = useHistory();
  const [token, setToken_] = useState(localStorage.getItem("token"));
  return isExpired(localStorage.getItem('token')
    ? navigate.push('/roomlist')
    : navigate.push('/');
};

export default Authprovider;


// function setToken(token) {
//   localStorage.setItem("token", token);
//   localStorage.setItem("lastLoginTime", new Date(Date.now()).getTime());
// }
// function getToken() {
//   let now = new Date(Date.now()).getTime();
//   let thirtyMinutes = 1000 * 60 * 30;
//   let timeSinceLastLogin = now - localStorage.getItem("lastLoginTime");
//   if (timeSinceLastLogin < thirtyMinutes) {
//     return localStorage.getItem("token");
//   }
// }