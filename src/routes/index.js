import { Router } from "express";
import ValidationController from "../controllers/ValidateController.js";
const controller = new ValidationController();

const router = Router();

// Validates NFe by company CNPJ
router.post("/valida", controller.validate);

export default router;
