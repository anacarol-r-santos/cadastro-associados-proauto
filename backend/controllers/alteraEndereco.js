const { Associado } = require('../models');

const editaEndereco = async (req, res) => {
    try {
        const { endereco } = req.body;
        const { id } = req.params;
        const atualizacao = await Associado.update({ endereco: endereco }, {
            where: { id: id }
        });
        return res.status(200).json({ atualizacao });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = { editaEndereco };