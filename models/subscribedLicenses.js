const { DataTypes, sequelize } = require("../database/db");

const SubscribedLicense = sequelize.define(
  "subscribedLicense",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    customerId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    licenseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    subscriptionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    expiryDate: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    filterResponses: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    // Other model options go here
  }
);

// `sequelize.define` also returns the model
// console.log(BusinessCategories === sequelize.models.businessCategories); // true
module.exports = SubscribedLicense;
