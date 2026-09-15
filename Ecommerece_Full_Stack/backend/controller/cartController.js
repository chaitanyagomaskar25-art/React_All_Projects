import { Product } from "../model/productModel.js";

export const getCartItems = async (req, res) => {
  try {
    const products = await Product.find({ isInCart: true });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateCartItem = async (req, res) => {
 try {
    const product = await Product.findByIdAndUpdate(req.params.id, {isInCart: !isInCart}, {
        returnDocument: "after"
        ,runValidators: true
    })
 res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }  
}