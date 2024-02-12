const { DataTypes, sequelize } = require("../database/db")


const BusinessCategory = sequelize.define('businessCategory', {
  // Model attributes are defined here
  id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  businessId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
    timestamps: false
  // Other model options go here
});

// `sequelize.define` also returns the model
// console.log(BusinessCategories === sequelize.models.businessCategories); // true
module.exports = BusinessCategory