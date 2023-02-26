const Sequelize = require("sequelize");

const sequelize = new Sequelize("poc", "root", "R1E2e3f4Gb!@#", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
