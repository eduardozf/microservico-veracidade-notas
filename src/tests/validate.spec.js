import ValidationService from "../services/ValidationService";

const validateService = new ValidationService();

it("should be a valid CNPJ", () => {
  const valid = validateService.validate("10490181000135");

  expect(valid).toBe(true);
});

it("should be a invalid CNPJ", () => {
  const CNPJarr = [
    "104901810",
    "10490181000131",
    "10490181000135x",
    "31503385000133",
    "abcde385000133",
  ];

  CNPJarr.forEach((cnpj) => {
    expect(validateService.validate(cnpj)).toBe(false);
  });
});
