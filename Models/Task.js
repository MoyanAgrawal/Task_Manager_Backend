const mongoose = require("mongoose");

// Define schema
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
    default: Date.now, // Set default value to current date
  },
  endDate: {
    type: Date,
    
      // required: function () {
      //   // End date is only required for tasks marked as Completed
      //   return this.status === "Completed";
      // },
  },
  status: {
    type: String,
    enum: ["Pending", "In Progress", "Completed", "Deployed", "Deferred"],
    required: true,
  },
  assignee: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    enum: ["P0", "P1", "P2"],
    required: true,
  },
});

// Create model
const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
