const Joi = require('joi');

const schema = Joi.object().keys({
    cpf: Joi.string().empty().required()
    .messages({
      'string.empty': 'É preciso informar o cpf',
      'any.required': 'É preciso informar o cpf',
    }),
    placa: Joi.string().required().empty()
    .messages({
      'string.empty': 'É preciso informar a placa do veículo',
      'any.required': 'É preciso informar a placa do veículo',
    }),
  });

module.exports = { schema };