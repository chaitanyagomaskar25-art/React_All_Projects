import express from 'express'
import { getCartItems, updateCartItem } from '../controller/cartController.js'

export const router = express.Router()

router.get("/", getCartItems)

router.patch("/", updateCartItem)