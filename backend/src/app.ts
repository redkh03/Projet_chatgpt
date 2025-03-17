import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import chatRoutes from "./routes/chatRoutes";

dotenv.config(); // Charge les variables d'environnement

const app = express();

// Middlewares
app.use(express.json()); // Permet de lire du JSON dans les requêtes
app.use(cors()); // Active CORS pour autoriser les requêtes depuis le frontend

// Routes API
app.use("/api/chat", chatRoutes);

// Export de l'application Express
export default app;
