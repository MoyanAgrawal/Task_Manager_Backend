const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const path = require("path");
const { errorHandler } = require("./Middlewares/errorMiddlewares");
const dbConnection = require("./Utils");
const morgan = require("morgan");
// const { route } = require("./Rots/taskRoute");
const router = require("./Rots/taskRoute");
const bodyParser = require('body-parser');
const cors = require('cors');

// const allowedOrigins = [
//   `http://localhost:${Port}.com`,
// ];

const env = require("dotenv")
env.config()

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
// app.get("/",(req,res)=>{
//     res.send("hi")
// })
app.use(cookieParser());

app.use(morgan("dev"));
app.use("/api",router);


app.use(errorHandler);


app.listen(process.env.PORT,()=>{
    console.log(`Server is running at ${Port} `)
})
