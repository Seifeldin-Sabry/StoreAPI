const express = require("express");
const router = express.Router();

const { getAllProducts } = require("../controller/productController");

router.route("/").get(getAllProducts);

module.exports = router;
