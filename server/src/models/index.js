const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
require('dotenv').config()

const db = {}

const MysqlConnect = new Sequelize(
  process.env.MYSQL_DB_NAME,
  process.env.MYSQL_DB_USER,
  process.env.MYSQL_DB_PASS, {
    host: process.env.MYSQL_DB_HOST,
    dialect: process.env.MYSQL_DB_DIALECT,
    port: process.env.MYSQL_DB_PORT,
    operatorsAliases: false,
    pool: {
      max: process.env.BD_POOL_MAX,
      min: process.env.BD_POOL_MIN,
      acquire: process.env.BD_POOL_ACQUIRE,
      idle: process.env.BD_POOL_IDLE
    }
  })

fs
  .readdirSync(__dirname)
  .filter((file) => file !== 'index.js')
  .forEach((file) => {
    const model = MysqlConnect.import(path.join(__dirname, file))
    db[model.name] = model
  })

Object.keys(db).forEach(function (modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db)
  }
})

db.MysqlConnect = MysqlConnect
db.Sequelize = Sequelize

module.exports = db
