const Joi = require("joi");

const registerValidation = (data) => {

  const schema = Joi.object({
    candidateFirstName: Joi.string().min(4).required(),
    candidateSecondName: Joi.string().min(4).required(),
    candidateEmail: Joi.string().min(6).email().required(),
    candidatePassword: Joi.string().min(8).max(12).required(),
  });

  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    loginEmail: Joi.string().min(6).email().required(),
    loginPassword: Joi.string().min(8).max(12).required(),
  });

  return schema.validate(data);
};

module.exports = {
  registerValidation,
  loginValidation,
};
