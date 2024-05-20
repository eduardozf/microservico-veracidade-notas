import validationConfig from "../config/validation.js";

class ValidationService {
  validate(issuer) {
    const { madeiraMadeira } = validationConfig.companies;

    return issuer == madeiraMadeira.CNPJ;
  }
}

export default ValidationService;
