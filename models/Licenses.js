const { DataTypes, sequelize } = require("../database/db")


const License = sequelize.define('license', {
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
  businessCategoryId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  cost :{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  validity:{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  filterFields:{
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
    timestamps: false
  // Other model options go here
});

// `sequelize.define` also returns the model
// console.log(BusinessCategories === sequelize.models.businessCategories); // true
module.exports = License