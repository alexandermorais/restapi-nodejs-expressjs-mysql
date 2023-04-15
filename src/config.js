// File to manage globals values

// Import dotenv
import { config } from "dotenv";

// This use the .env file to avoid exposing some data
config();

export default {
    host: process.env.HOST || "",
    database: process.env.DATABASE || "",
    user: process.env.USER || "",
    password: process.env.PASSWORD || "",
};
