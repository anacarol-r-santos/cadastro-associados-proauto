const express = require('express');

const router = express.Router();

const { postAssociado } = require('../controllers/cadastro');
const { login } = require('../controllers/login');

router.post('/cadastro', postAssociado);
router.post('/login', login);

module.exports = { router };