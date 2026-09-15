import express from 'express'
import { createProduct, deleteProduct, getCategories, getFeaturedProducts, getProductDetail, getProducts, updateProduct } from '../controller/productController.js'
import { toggleLikeProduct } from '../controller/likedController.js'

export const router = express.Router()

router.post("/", createProduct)

router.get("/", getProducts)
router.get("/categories", getCategories);
router.get("/featured-products", getFeaturedProducts)

router.delete("/:id", deleteProduct)

router.patch("/:id", updateProduct)

router.get("/:id", getProductDetail)

router.patch("/:id/liked", toggleLikeProduct)
