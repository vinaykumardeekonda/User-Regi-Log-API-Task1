const joi = require('joi');

exports.registerSchema = joi.object({
    name: joi.string().min(3).max(50).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required()
});

exports.loginSchema = joi.object({
    email: joi.string().email().required(),
  password: joi.string().min(6),
  otp: joi.string().length(6)
})