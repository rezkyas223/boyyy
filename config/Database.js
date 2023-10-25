const { Sequelize } = require("sequelize");

const envData = process.env;

const db = new Sequelize(envData.PG_DATABASE, envData.PG_USERNAME, envData.PG_PASSWORD, {
  host: envData.PG_HOST,
  dialect: "postgres",
  port: envData.PG_PORT
})

module.exports = db;