const { schema } = require('../services/validacaoLogin');
const { Associado } = require('../models');

const login = async (req, res) => {
    const { cpf, placa } = req.body;

    const { error } = schema.validate(
        { cpf, placa },
        { abortEarly: false },
    );
    if (error) {
        return res.status(400).json(error.message);
    }

    try {
        const associado = await Associado.findOne({ where: { cpf } });
        if (!associado || associado.placa !== placa) {
            return res
              .status(401)
              .json({ message: 'Cliente não cadastrado ou placa incorreta' });
          }
        return res.status(200).json({message: 'Login efetuado com sucesso'});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Algo deu errado, tente novamente mais tarde.' });
    }
};

module.exports = { login };