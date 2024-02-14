const { DataTypes, sequelize } = require("../database/db")


const LicenseTypes = sequelize.define('licenseTypes', {
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
  licenseId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  businessCategoryId:{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  filterId:{
    type: DataTypes.STRING,
    allowNull: false
  },
  validity:{
    type: DataTypes.INTEGER,
  }
}, {
    timestamps: false
  // Other model options go here
});

// `sequelize.define` also returns the model
// console.log(BusinessCategories === sequelize.models.businessCategories); // true
module.exports = LicenseTypes