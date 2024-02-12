const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const db = require("./database/db");
const allBusinesses = require("./controllers/businesses");
const businessModel = require("./models/businessModel")
const businessCategories = require("./models/businessCategories");
const allBusinessCategories = require("./controllers/businessCategories");
const allLicenses = require("./controllers/licenses");

//middlewares
app.use(express.json());
app.use(cors());

const port = process.env.port;
businessModel.sync()
businessCategories.sync()

app.get("/getAllBusinesses",allBusinesses)
// app.use(businessSelected)
app.get("/getBusinessCategories/:businessId", allBusinessCategories)
app.get("/getLicenses/:businessCategoryId",allLicenses)
app.listen(port, async () => {
    try {
      await db.connectToDB()
      console.log("Connection to DB successfully");
      console.log("Listening on PORT: ", port);
    } catch (err) {
      console.log("Error connecting to DB");
    }
});
  