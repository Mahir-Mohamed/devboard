import express from "express";
import cors from "cors";
import projectRoutes from "./routes/project.routes.js";

import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "DevBoard API is running",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);

export default app;