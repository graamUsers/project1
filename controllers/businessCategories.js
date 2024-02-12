const BusinessCategory = require("../models/businessCategories");
const allBusinessCategories = async (req, res) => {
  console.log("inside allBusinessCategories");
  const businessId = req.params.businessId;
  const businessCategories = await BusinessCategory.findAll({
    attributes: ["id", "name"],
    where: {
      businessId: businessId,
    },
  });
  res.send(JSON.stringify(businessCategories));
  //   console.log("All businesses:", JSON.stringify(businesses));
};

module.exports = allBusinessCategories;
