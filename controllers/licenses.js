const License = require("../models/Licenses");
const allLicenses = async (req, res) => {
  console.log("inside allBusinessCategories");
  const businessCategoryId = req.params.businessCategoryId;
  const licenses = await License.findAll({
    attributes: ["id", "name","cost"],
    where: {
      businessCategoryId: businessCategoryId,
    },
  });
  res.send(JSON.stringify(licenses));
  //   console.log("All businesses:", JSON.stringify(businesses));
};

module.exports = allLicenses;
