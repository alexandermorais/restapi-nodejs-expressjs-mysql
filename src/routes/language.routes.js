import { Router } from "express";
import { methods as languageController } from "./../controllers/language.controller";

// Variables
const router = Router();

// Routes
router.get("/", languageController.getLanguages);
router.get("/:id", languageController.getLanguage);
router.post("/", languageController.addLanguage);

// Export
export default router;
