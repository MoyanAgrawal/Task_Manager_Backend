const express = require("express");
const router = express.Router();
const taskController = require("../Controllers/taskController");

// Route for creating a new task
router.post("/createTask", taskController.createTask);

// Route for getting all tasks
router.get("/tasks", taskController.getAllTasks);

// Route for getting a task by ID
router.get("/tasks/:id", taskController.getTaskById);

// Route for updating a task by ID
router.put("/tasks/edit/:id", taskController.updateTaskById);

// Route for deleting a task by ID
router.delete("/tasks/delete/:id", taskController.deleteTaskById);

module.exports = router;
