
const { Sequelize } = require('sequelize');

const db = new Sequelize('testsigaf', 'root', '', {
    host: 'localhost',
    dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  });   


module.exports = db