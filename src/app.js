const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
const mongoose = require('mongoose');

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const url = 'mongodb://127.0.0.1:27017/jobsDB'
mongoose.set('strictQuery', false);
mongoose.connect(url, () => {
  console.log("Connected to MongoDB");
});

const router = require('./routes/routes');

app.use('/api/jobs', router);

app.listen(3000, () => console.log("The server is running on 3000 port"));