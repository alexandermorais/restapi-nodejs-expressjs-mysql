import express from "express";
import morgan from "morgan";

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

// Export
export default app;
