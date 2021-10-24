const Sequelize = require('sequelize');

const sequelize = new Sequelize('testdb', 'root', null, {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
