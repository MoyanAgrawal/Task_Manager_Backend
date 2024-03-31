const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const path = require("path");
const { errorHandler } = require("./Middlewares/errorMiddlewares");
const dbConnection = require("./Utils");
const morgan = require("morgan");
const router = require("./Rots/taskRoute");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your React app port
  })
);

app.use(cors());
dbConnection();
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(morgan("dev"));
app.get("/", (req, res) => res.send("Express on Vercel"));
app.use("/api", router);

app.use(errorHandler);

app.listen(3000, () => console.log("Server ready on port 3000."));
