'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pessoas', [
      {
        nome: 'João Silva',
        cpf: '123.456.789-00',
        telefone: '(11) 98765-4321',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Maria Oliveira',
        cpf: '234.567.890-12',
        telefone: '(21) 87654-3210',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pessoas', null, {});
  }
};
