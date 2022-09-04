const Joi = require('joi');

const schema = Joi.object().keys({
    nome: Joi.string().empty().required()
    .messages({
      'string.empty': 'Nome não foi informado',
      'any.required': 'Nome não foi informado',
    }),
    cpf: Joi.string().required().empty()
    .messages({
      'string.empty': 'CPF não foi informado',
      'any.required': 'CPF não foi informado',
    }),
    placa: Joi.string().required().empty()
    .messages({
      'string.empty': 'Placa não foi informada',
      'any.required': 'Placa não foi informada',
    }),
    endereco: Joi.string().required().empty()
    .messages({
      'string.empty': 'Endereço não foi informado',
      'any.required': 'Endereço não foi informado',
    }),
    telefone: Joi.string().required().empty()
    .messages({
      'string.empty': 'Telefone não foi informado',
      'any.required': 'Telefone não foi informado',
    }),
  });

module.exports = { schema };