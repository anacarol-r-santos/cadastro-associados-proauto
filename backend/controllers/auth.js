require('dotenv').config();
const { verificaToken } = require('../services/auth');
const { Associado } = require('../models');
const jwt = require('jsonwebtoken');


const validaToken = async (req, res, next) => {
    try {
        const token = req.headers['authorization'];  

        if (!token || token === undefined) {
            return res.status(401).json({ message: 'Token não encontrado' });
        }

        const decoficacao = jwt.verify(token, process.env.JWT_SECRET);
        console.log('decod ', decoficacao);

        const user = await Associado.findOne({ where: { cpf: decoficacao.data.cpf } });

        if (!user) {
            return res.status(401).json({
                message: 'Erro ao procurar usuário do token.'
            });
        };

        req.user = user;

        next();
    } catch (error) {
        return res.status(401).json({ message: error.message });
    }
};

module.exports = { validaToken };