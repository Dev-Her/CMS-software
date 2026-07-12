import express from "express";
import { getAllAppointments, getAppointmentById, createAppointment, updateAppointment, deleteAppointment } from "../controllers/apptController.js";
const router = express.Router();

router.post("/", createAppointment);
router.get("/", getAllAppointments);
router.get("/test", (req, res) => {
  res.json({ message: "Client routes test works" });
});
router.get("/:id", getAppointmentById);
router.put("/:id", updateAppointment )
router.delete("/:id", deleteAppointment)
export default router;