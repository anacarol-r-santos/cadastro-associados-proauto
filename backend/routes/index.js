const express = require('express');

const router = express.Router();

const { postAssociado } = require('../controllers/cadastro');
const { login } = require('../controllers/login');
const { validaToken } = require('../controllers/auth');

router.post('/cadastro', postAssociado);
router.post('/login', validaToken, login);

module.exports = { router };