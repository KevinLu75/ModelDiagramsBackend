//const sequelize = require('sequelize');
const {Sequelize} = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize(process.env.BDD_NAME, process.env.BDD_USER, process.env.PASS,{
    dialect: 'sqlite',
    host: './db.sqlite3'
});
module.exports = sequelize;