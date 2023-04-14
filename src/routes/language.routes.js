import { Router } from "express";
import { methods as languageController } from "./../controllers/language.controller";

// Variables
const router = Router();

// Routes
router.get("/", languageController.getLanguages);

// Export
export default router;
