const mongoose = require("mongoose");

 const dbConnection = async () => {
  try {
    await mongoose.connect("mongodb+srv://Moyan_Agrawal:Moy%40n144@cluster0.8dwfmja.mongodb.net/Task-Manager");

    console.log("DB connection established");
  } catch (error) {
    console.log("DB Error: " + error);
  }
};

module.exports=dbConnection;
