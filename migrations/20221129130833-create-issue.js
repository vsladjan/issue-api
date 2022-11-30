'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('issue', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      resolved: {
        type: Sequelize.BOOLEAN
      },
      userId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'user',
          },
          key: 'id'
        },
        allowNull: true
      },
      supportId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'support',
          },
          key: 'id'
        },
        allowNull: true
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('issue');
  }
};