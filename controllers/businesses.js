const Business = require("../models/businessModel")
const allBusinesses = async (req, res) => {
    console.log("inside allBusinesses")
  const businesses = await Business.findAll({
    attributes: ['id', 'name']
  })
  res.send(JSON.stringify(businesses))
//   console.log("All businesses:", JSON.stringify(businesses));
};

module.exports = allBusinesses
