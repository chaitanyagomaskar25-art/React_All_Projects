import express from 'express'
import { getLikedItems } from '../controller/likedController.js'

export const router = express.Router()

router.get("/", getLikedItems)

