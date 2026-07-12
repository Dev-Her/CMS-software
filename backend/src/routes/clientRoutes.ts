import express from "express";
import { getAllClients, getClientById, createClient, updateClient, deleteClient } from "../controllers/clientController.js";
const router = express.Router();

router.post("/", createClient);
router.get("/", getAllClients);
router.get("/test", (req, res) => {
  res.json({ message: "Client routes test works" });
});
router.get("/:id", getClientById);
router.put("/:id", updateClient )
router.delete("/:id", deleteClient)
export default router;