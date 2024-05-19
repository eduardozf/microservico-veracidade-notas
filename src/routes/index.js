import { Router } from "express";

const router = Router();

// Default Route
router.get("/", (_, response) => response.send("Server is running"));

// Validates NFe by company CPF
router.post("/valida", (request, response) => {
  const issuer = request?.body?.issuer || "";
  const compareWith = "10490181000135";

  const CNPJ = issuer.replace(/[^a-zA-Z0-9 ]/g, "");

  const valid = CNPJ == compareWith;

  return response.send(valid);
});

export default router;
