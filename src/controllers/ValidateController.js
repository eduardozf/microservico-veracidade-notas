import ValidationService from "../services/ValidationService.js";

class ValidateController {
  validate(request, response) {
    try {
      const validationService = new ValidationService();
      const issuer = request?.body?.cnpj;

      if (!issuer)
        return response
          .status(400)
          .send("CNPJ is required in the request body.");

      const isValid = validationService.validate(issuer);
      const responseStatus = isValid ? 200 : 400;

      return response.status(responseStatus).send({ isValid });
    } catch (error) {
      return response
        .status(500)
        .send("An error occurred during CNPJ validation.");
    }
  }
}

export default ValidateController;
