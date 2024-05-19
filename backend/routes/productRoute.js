const express = require("express");
const router = express.Router();

const { getAllProducts,createProduct, updateProduct, deleteProduct, getProductDetails } = require("../controllers/productController");

// router.route("/products").get(getAllProducts);
router.get("/products",getAllProducts);

router.post("/product/new",createProduct);

router.put("/product/:id",updateProduct);

router.delete("/product/:id",deleteProduct);

router.delete("/product/:id",getProductDetails);



module.exports = router;