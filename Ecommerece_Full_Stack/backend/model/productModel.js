import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A product must have a name"],
      trim: true,
      maxlength: [100, "Product name cannot exceed 100 characters"],
    },
    description: {
      type: String,
      required: [true, "A product must have a description"],
      maxlength: [2000, "Description cannot exceed 2000 characters"],
    },
    price: {
      type: Number,
      required: [true, "A product must have a price"],
      min: [0, "Price cannot be negative"],
    },
  discountPrice: {
  type: Number,
  min: [0, "Discount price cannot be negative"],
},
    category: {
      type: String,

      required: [true, "A product must belong to a category"],

      enum: [
        "Electronics",
        "Clothing",
        "Shoes",
        "Home",
        "Beauty",
        "Books",
        "Sports",
        "Toys",
        "Grocery",
        "Accessories",
      ],

      index: true,
    },
    stock: {
      type: Number,
      min: [0, "Stock cannot be negative"],
      default: 1,
    },
    images: {
      type: [String],
      default: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWmwkYA1Cd0QDokZkak3zDojn7oEPccY0aV89bk8fWvA&s=10",
      ],
    },
    ratingsAverage: {
      type: Number,
      default: 4.5,
      min: [1, "Rating must be above 1.0"],
      max: [5, "Rating must be below 5.0"],
      set: (val) => Math.round(val * 10) / 10,
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    isLiked : {
      type :Boolean,
      default : false
    },
    isInCart : {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
  },
);

export const Product = mongoose.model("Prodcut", ProductSchema);
