const { Associado } = require('../models');

const dadosAssociado = async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await Associado.findByPk(id);
        if (!usuario) {
            return res.status(400).json({message: 'Associado não encontrado'});
        }
        return res.status(200).json(usuario);        
    } catch (error) {
        res.status(500).json(error.message);
    }
};

module.exports = { dadosAssociado };