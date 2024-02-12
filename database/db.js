const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("licenses", "admin", "graamprojects", {
  host: "licensedb.chygyi06ybg8.eu-north-1.rds.amazonaws.com",
  dialect: "mysql",
});
async function connectToDB() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
module.exports = { Sequelize, DataTypes, connectToDB, sequelize };
