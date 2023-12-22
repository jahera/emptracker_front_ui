import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL} from "../constants";

export const signUp = async (userData) => {
  const response = await axios.post(`${API_URL}/signup`, { user: userData });
  return response.data;
};

export const signIn = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials);
  return response;
};

export const signOut = async () => {
  const token = localStorage.getItem("Token");
  const headers = { 'Authorization': token };
  const response = await axios.delete(`${API_URL}/logout`, {headers});
  return response;
};

export const roomList = async () => {
  const token = localStorage.getItem("Token");
  const headers = { 'Authorization': token };
  const response = await fetch(`${API_URL}/api/v1/rooms`, {headers});
  return response;
};

export const roomCreate = async (inputData) => {
  const token = localStorage.getItem("Token");
  const headers = { 'Authorization': token };
  const response = await axios.post(`${API_URL}/api/v1/rooms`, inputData, {headers});
  return response;
};

export const roomDestry= async (id) => {
  const token = localStorage.getItem("Token");
  const headers = { 'Authorization': token };
  await axios.delete(`${API_URL}/api/v1/rooms/${id}`, {headers})
  return response;
};