const Joi = require('joi');

const customerSchema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().email().required(),
    phone: Joi.required()
})

module.exports = customerSchema;