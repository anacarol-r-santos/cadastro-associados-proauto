const { Associado } = require('../models');

const cadastraAssociado = async (req, res) => {
    try {
        const { nome, cpf, placa, endereco, telefone } = req.body;
        const novoAssociado = await Associado.create({ nome, cpf, placa, endereco, telefone });

        return res.status(201).json(novoAssociado);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Algo deu errado, tente novamente mais tarde' });
    }
};

module.exports = cadastraAssociado;