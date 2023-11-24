import React from 'react'
import axios from "axios";
import ReactDOM from 'react-dom/client'
import "./bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
