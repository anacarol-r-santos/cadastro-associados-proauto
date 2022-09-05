const express = require('express');

const router = express.Router();

const { postAssociado } = require('../controllers/cadastraAssociado');
const { login } = require('../controllers/login');
const { validaToken } = require('../controllers/auth');
const { dadosAssociado } = require('../controllers/buscaAssociado');
const { editaTelefone } = require('../controllers/alteraTelefone');
const { editaEndereco } = require('../controllers/alteraEndereco');

router.post('/cadastro', postAssociado);
router.post('/login', login);
router.get('/:id', validaToken, dadosAssociado);
router.put('/telefone/:id', validaToken, editaTelefone);
router.put('/endereco/:id', validaToken, editaEndereco);

module.exports = { router };