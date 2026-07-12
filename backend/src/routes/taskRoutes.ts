import express from "express";
import { getAllTasks, getTaskById, createTask, updateTask, deleteTask } from "../controllers/taskController.js";
const router = express.Router();

router.post("/", createTask);
router.get("/", getAllTasks);
router.get("/test", (req, res) => {
  res.json({ message: "Client routes test works" });
});
router.get("/:id", getTaskById);
router.put("/:id", updateTask )
router.delete("/:id", deleteTask)
export default router;