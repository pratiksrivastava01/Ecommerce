// Create a product
import Product from "../Models/productModels.js";
import ErrorHandler from "../Utils/errorHandler.js";

// Create a new product
const createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
};

// Get all products
const getallProducts = async(req, res) => {
  const products = await Product.find();

  res.status(200).json({
    success: true,
    products,
  });
};

// Get a single product
const getSingleProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
};

// Update a product
const updateProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
    message: "Product updated successfully",
  });
};

// Delete a product
const deleteProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  await product.deleteOne();
  res.status(200).json({
    success: true,
    message: "Product removed successfully",
  });
};

export {
  getallProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
};
