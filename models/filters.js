const { DataTypes, sequelize } = require("../database/db")


const Filter = sequelize.define('filter', {
  // Model attributes are defined here
  id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
    timestamps: false
  // Other model options go here
});

// `sequelize.define` also returns the model
// console.log(BusinessCategories === sequelize.models.businessCategories); // true
module.exports = Filter