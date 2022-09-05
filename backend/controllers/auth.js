require('dotenv').config();
const { Associado } = require('../models');
const jwt = require('jsonwebtoken');


const validaToken = async (req, res, next) => {
    try {
        const token = req.headers['authorization'];  

        if (!token || token === undefined) {
            return res.status(401).json({ message: 'Token não encontrado' });
        }

        const decoficacao = jwt.verify(token, process.env.JWT_SECRET);
        console.log('decodificação: ', decoficacao)

        const user = await Associado.findOne({ where: { cpf: decoficacao.data.cpf } });
        console.log('user: ', user)

        if (!user) {
            return res.status(401).json({
                message: 'Erro ao procurar token do usuário.'
            });
        };

        req.user = user;

        next();
    } catch (error) {
        return res.status(401).json({ message: error.message });
    }
};

module.exports = { validaToken };