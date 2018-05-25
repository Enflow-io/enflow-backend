'use strict';
module.exports = (sequelize, DataTypes) => {
	var ContactForm = sequelize.define('ContactForm', {
		email: {
			type: DataTypes.STRING,
			isEmail: true,
		},
		name: {
			type: DataTypes.STRING,
			isEmail: true,
		},
		lastName: {
			type: DataTypes.STRING,
			isEmail: true,
		},
		message: {
			type: DataTypes.STRING,
			isEmail: true,
		},
	}, {});
	ContactForm.associate = function (models) {
		// associations can be defined here
	};
	return ContactForm;
};