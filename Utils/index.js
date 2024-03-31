const mongoose = require("mongoose");

 const dbConnection = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Task-Manager");

    console.log("DB connection established");
  } catch (error) {
    console.log("DB Error: " + error);
  }
};

module.exports=dbConnection;