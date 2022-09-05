const { Associado } = require('../models');

const editaTelefone = async (req, res) => {
    try {
        const { telefone } = req.body;
        const { id } = req.params;
        const atualizacao = await Associado.update({ telefone: telefone }, {
            where: { id: id }
        });
        return res.status(200).json({ atualizacao });
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ message: error.message });
    }
}

module.exports = { editaTelefone };
