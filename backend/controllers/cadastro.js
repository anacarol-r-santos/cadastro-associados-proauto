const { schema } = require('../services/validacaoPost');
const { Associado } = require('../models');

const postAssociado = async (req, res) => {
    const { nome, cpf, placa, endereco, telefone } = req.body;

    const { error } = schema.validate(
        { nome, cpf, placa, endereco, telefone },
        { abortEarly: false },
    );
    if (error) {
        return res.status(400).json(error.message);
    }

    try {
        const novoAssociado = await Associado.create({
            nome, cpf, placa, endereco, telefone
        });
        return res. status(201).json(novoAssociado);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Algo deu errado' });
    }
}

module.exports = { postAssociado };