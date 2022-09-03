'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert('Associados', [
      {
        nome: 'Carol Santos',
        cpf: '123.456.789.10',
        placa: 'hca3176',
        endereco: 'Rua dos codigos, 126',
        telefone: '(31) 98707-9035',
      },
      {
        nome: 'Vinicius Jose',
        cpf: '123.456.789.11',
        placa: 'dca2f47',
        endereco: 'Rua da Alegria, 175',
        telefone: '(31) 9485-3453',
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('Associados', null, {});
  }
};
