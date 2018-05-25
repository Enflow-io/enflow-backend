'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {

		return  [
			queryInterface.addColumn(
				'ContactForms',
				'name',
				{
					type: Sequelize.STRING,
					allowNull: true,
				}
			),
			queryInterface.addColumn(
				'ContactForms',
				'lastName',
				{
					type: Sequelize.STRING,
					allowNull: true
				}
			),
			queryInterface.addColumn(
				'ContactForms',
				'message',
				{
					type: Sequelize.STRING,
					allowNull: true
				}
			)
		];

		/*
		  Add altering commands here.
		  Return a promise to correctly handle asynchronicity.

		  Example:
		  return queryInterface.createTable('users', { id: Sequelize.INTEGER });
		*/
	},

	down: (queryInterface, Sequelize) => {
		/*
		  Add reverting commands here.
		  Return a promise to correctly handle asynchronicity.

		  Example:
		  return queryInterface.dropTable('users');
		*/
	}
};
