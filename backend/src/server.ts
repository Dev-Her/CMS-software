import "./config/env.js";
import express from "express";
import cors from "cors";
import clientRoutes from "./routes/clientRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import apptRoutes from "./routes/apptRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";

const app = express();

// my middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Pulse API is running" });
});

app.use("/api/clients", clientRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/appointments", apptRoutes);
app.use("/api/dashboard", dashboardRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
