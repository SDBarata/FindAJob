require("dotenv").config();
const express = require("express");
const cors = require("cors");
const initDatabase = require("./src/db/database");

initDatabase();

const app = express();
app.use(express.json());
app.use(cors());

const router = require("./src/routes/routes");
app.use("/api", router);

app.listen(3000, () => console.log("The server is running on 3000 port"));
