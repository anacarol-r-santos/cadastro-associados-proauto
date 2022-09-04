const express = require('express');

const router = express.Router();

const { postAssociado } = require('../controllers/cadastro');

router.post('/cadastro', postAssociado);

module.exports = { router };