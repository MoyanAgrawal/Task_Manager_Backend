const Task = require("../Models/Task"); // Assuming your task schema is defined in a file named 'task.js' inside a 'models' directory

// Controller functions
const taskController = {
  // Create a new task
  createTask: async (req, res) => {
    try {
      const newTask = await Task.create(req.body); // Assuming req.body contains the task data
      res.status(201).json(newTask);
    } catch (error) {
      console.error("Error creating task:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  // Get all tasks
  getAllTasks: async (req, res) => {
    try {
      const tasks = await Task.find();
      res.status(200).json(tasks);
    } catch (error) {
      console.error("Error getting tasks:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  // Get task by ID
  getTaskById: async (req, res) => {
    try {
      const taskId = req.params.id;
      const task = await Task.findById(taskId);
      if (!task) {
        return res.status(404).json({ error: "Task not found" });
      }
      res.status(200).json(task);
    } catch (error) {
      console.error("Error getting task by ID:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  // Update task by ID
  updateTaskById: async (req, res) => {
    try {
      const taskId = req.params.id;
      const updatedTask = await Task.findByIdAndUpdate(taskId, req.body, {
        new: true,
      });
      if (!updatedTask) {
        return res.status(404).json({ error: "Task not found" });
      }
      res.status(200).json(updatedTask);
    } catch (error) {
      console.error("Error updating task by ID:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  // Delete task by ID
  deleteTaskById: async (req, res) => {
    try {
      const taskId = req.params.id;
      const deletedTask = await Task.findByIdAndDelete(taskId);
      if (!deletedTask) {
        return res.status(404).json({ error: "Task not found" });
      }
      res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
      console.error("Error deleting task by ID:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = taskController;
