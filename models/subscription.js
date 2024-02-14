const { DataTypes, sequelize } = require("../database/db")


const Subscription = sequelize.define('subscription', 
{
  // Model attributes are defined here
  id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  employeeId: {
    type: DataTypes.STRING,
    allowNull: false
  },
  businessCategoryId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  customerId :{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  totalCost:{
    type: DataTypes.STRING,
    allowNull: false
  }
}, 
{
    timestamps: false
  // Other model options go here
});

// `sequelize.define` also returns the model
// console.log(BusinessCategories === sequelize.models.businessCategories); // true
module.exports = Subscription