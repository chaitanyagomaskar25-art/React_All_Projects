import express from 'express'
import { connectDB } from './config/db.js'
import { router as productRouter } from './router/productRouter.js'
import { router as cartRouter } from './router/cartRoute.js'
import { router as likedRouter } from './router/likedRoute.js'
import dotenv from 'dotenv'
import cors from 'cors'

const app = express()
dotenv.config()
app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.redirect("/products")
})

app.use("/products", productRouter)
app.use("/cart", cartRouter)
app.use("/liked-products", likedRouter)

connectDB()
app.listen(3000, ()=>{
    console.log("Server is running.....");
})
