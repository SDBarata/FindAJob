import axios from "axios";
require("dotenv").config();
const dotenv = require("dotenv");

const envFound = dotenv.config();
if (!envFound) {
  // This error should crash whole process
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

const api = axios.create({
  baseURL: process.env.REACT_URL_API,
});

export default api;
