import express from "express";
import morgan from "morgan";

// Imported routes
import languageRoutes from "./routes/language.routes";

/**
 * Creating a constant that is equal to Express.js execution.
 * Express.js is use to create a web server using verbs: GET, POST, PUT and
 * DELETE (most commons).
 */
const app = express();

// Settings
// Port
app.set("port", 4000);

// Middlewares
app.use(morgan("dev"));

// To understands and process JSON
app.use(express.json());

// Routes
app.use("/api/languages", languageRoutes);

// Export
export default app;
