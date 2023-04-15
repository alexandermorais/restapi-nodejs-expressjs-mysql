import { Router } from "express";
import { methods as languageController } from "./../controllers/language.controller";

// Variables
const router = Router();

// Routes
router.get("/", languageController.getLanguages);
router.post("/", languageController.addLanguage);

// Export
export default router;
