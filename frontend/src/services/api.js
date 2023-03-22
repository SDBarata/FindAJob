import React from "react";
import axios from "axios";

const dotenv = require("dotenv");

const api = axios.create({
  baseURL: process.env.REACT_URL_API,
});

export default api;
