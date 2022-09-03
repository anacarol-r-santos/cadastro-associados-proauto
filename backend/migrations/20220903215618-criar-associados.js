'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const tabelaAssociados = queryInterface.createTable('Associados', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING,

      },
      cpf: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      placa: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      endereco: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      telefone: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
    return tabelaAssociados;
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable('Associados');
  }
};
