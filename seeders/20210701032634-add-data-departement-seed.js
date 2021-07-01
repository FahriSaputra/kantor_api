"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("tabel_departements", [
      {
        nama_departement: "Business Development",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_departement: "Finance",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_departement: "General Affairs",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_departement: "IT Development",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("tabel_departements", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
