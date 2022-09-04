// const { schema } = require('../services/validacaoPost');
const { Associado } = require('../models');

const postAssociado = async (req, res) => {
    try {
        const { nome, cpf, placa, endereco, telefone } = req.body;
        const novoAssociado = await Associado.create({
            nome, cpf, placa, endereco, telefone
        });
        return res. status(201).json(novoAssociado);
    } catch (error) {
        console.log(e.message);
        res.status(500).json({ message: 'Algo deu errado' });
    }
}

module.exports = { postAssociado };