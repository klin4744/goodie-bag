const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define('candy', {
   name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
         notEmpty: true,
      },
   },
   description: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
         notEmpty: true,
      },
   },
   quantity: {
      type: Sequelize.INTEGER,
      validate: {
         min: 0,
         max: 10,
      },
      defaultValue: 0,
   },
   imageUrl: {
      type: Sequelize.STRING,
      defaultValue:
         'https://images.unsplash.com/photo-1515007917921-cad9bf0e2e87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
   },
});
