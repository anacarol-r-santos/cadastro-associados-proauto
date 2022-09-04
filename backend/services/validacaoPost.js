const Joi = require('joi');

const schema = Joi.object().keys({
    nome: Joi.string().empty().required(),
    cpf: Joi.string().required().empty(),
    placa: Joi.string().required().empty(),
    endereco: Joi.string().required().empty(),
    telefone: Joi.string().required().empty()
  });

module.exports = { schema };