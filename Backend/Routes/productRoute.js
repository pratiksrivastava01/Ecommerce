import express from "express";
import {
  getallProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
} from "../Controller/productController.js";

const router = express.Router();

router.route("/products").get(getallProducts);

router.route("/product/new").post(createProduct);

router
  .route("/product/:id")
  .get(getSingleProduct)
  .put(updateProduct)
  .delete(deleteProduct);

export default router;
