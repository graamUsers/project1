const { DataTypes, sequelize } = require("../database/db")


const Business = sequelize.define('business', {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  }
}, {
    timestamps: false
  // Other model options go here
});

// `sequelize.define` also returns the model
// console.log(Business === sequelize.models.businesses); // true
module.exports = Business