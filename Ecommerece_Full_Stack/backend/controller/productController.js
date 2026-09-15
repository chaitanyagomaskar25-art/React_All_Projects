import { Product } from "../model/productModel.js";

export const createProduct = async (req, res) => {
  try {
    const product = await Product.create({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      stock: req.body.stock,
      images: req.body.images,
    });
    res.status(201).json({
      data: product,
    });
  } catch (error) {
    console.log("ERROR:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};

export const getProducts = async (req, res) => {
  try {
    const conditions = {};
    const { name, category } = req.query;
    if (name) {
      conditions.name = {
        $regex: name,
        $options: "i",
      };
    }
    if (category) {
      conditions.category = {
        $regex: category,
        $options: "i",
      };
    }

    const products = await Product.find(conditions);
    res.status(200).json({
      count: products.length,
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Your product deleted successfully.!!",
      product: product,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const existingProduct = await Product.findById(req.params.id);

    if (!existingProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // If price is being updated, use the new price.
    // Otherwise, use the existing price.
    const newPrice = req.body.price ?? existingProduct.price;
    const newDiscountPrice = req.body.discountPrice;

    if (
      newDiscountPrice !== undefined &&
      newDiscountPrice !== null &&
      newDiscountPrice !== "" &&
      newDiscountPrice >= newPrice
    ) {
      return res.status(400).json({
        success: false,
        message: `Discount price (${newDiscountPrice}) should be below regular price (${newPrice})`,
      });
    }

    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: "after",
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    console.log("UPDATE ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getProductDetail = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getCategories = async (req, res) => {
  try {
    const categories = await Product.distinct("category");

    res.status(200).json({
      success: true,
      data: categories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getFeaturedProducts = async (req, res) => {
  try {
    const products = await Product.find({ isFeatured: true });
    res.status(200).json({
      data: products
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
