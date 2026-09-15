import { useEffect } from "react";
import { useLocation } from "react-router";
import { useForm, useFieldArray } from "react-hook-form";
import { useDispatch } from "react-redux";

import { addProducts, updateProduct } from "../../redux/productSlice";

const CATEGORIES = [
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
];

function AddProducts() {
  const dispatch = useDispatch();
  const location = useLocation();

  // Product received when clicking Update
  const product = location.state?.product;

  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
      price: "",
      discountPrice: "",
      category: "",
      stock: 1,
      images: [""],
      ratingsAverage: 4.5,
      ratingsQuantity: 0,
      isFeatured: false,
      isLiked: false,
      isInCart: false,
    },
  });

  // --------------------------------
  // IMAGE ARRAY
  // --------------------------------

  const { fields, append, remove, replace } = useFieldArray({
    control,
    name: "images",
  });

  const price = watch("price");

  // --------------------------------
  // LOAD PRODUCT WHEN EDITING
  // --------------------------------

  useEffect(() => {
    if (!product) {
      reset({
        name: "",
        description: "",
        price: "",
        discountPrice: "",
        category: "",
        stock: 1,
        images: [""],
        ratingsAverage: 4.5,
        ratingsQuantity: 0,
        isFeatured: false,
        isLiked: false,
        isInCart: false,
      });

      replace([""]);

      return;
    }

    reset({
      name: product.name ?? "",
      description: product.description ?? "",
      price: product.price ?? "",
      discountPrice: product.discountPrice ?? "",
      category: product.category ?? "",
      stock: product.stock ?? 1,
      images:
        Array.isArray(product.images) && product.images.length > 0
          ? product.images
          : [""],
      ratingsAverage: product.ratingsAverage ?? 4.5,
      ratingsQuantity: product.ratingsQuantity ?? 0,
      isFeatured: product.isFeatured ?? false,
      isLiked: product.isLiked ?? false,
      isInCart: product.isInCart ?? false,
    });
  }, [product, reset, replace]);
  // --------------------------------
  // SUBMIT
  // --------------------------------

  const onSubmit = async (data) => {
    // Remove empty image URLs
    const images = (data.images || [])
      .map((image) => image?.trim())
      .filter((image) => image !== "");

    const formattedData = {
      ...data,

      // Convert numeric values
      price:
        data.price === "" || data.price === undefined
          ? undefined
          : Number(data.price),

      discountPrice:
        data.discountPrice === "" || data.discountPrice === undefined
          ? undefined
          : Number(data.discountPrice),

      stock: Number(data.stock),

      ratingsAverage: Number(data.ratingsAverage),

      ratingsQuantity: Number(data.ratingsQuantity),

      // Boolean values
      isFeatured: Boolean(data.isFeatured),
      isLiked: Boolean(data.isLiked),
      isInCart: Boolean(data.isInCart),

      // Image array
      images,
    };

    console.log("DATA BEING SENT:", formattedData);

    try {
      if (product?._id) {
        // UPDATE
        await dispatch(
          updateProduct({
            id: product._id,
            data: formattedData,
          }),
        ).unwrap();

        alert("Product updated successfully");
      } else {
        // ADD
        await dispatch(addProducts(formattedData)).unwrap();

        alert("Product added successfully");
      }

      // Reset form after successful operation
      reset({
        name: "",
        description: "",
        price: "",
        discountPrice: "",
        category: "",
        stock: 1,
        images: [""],
        ratingsAverage: 4.5,
        ratingsQuantity: 0,
        isFeatured: false,
        isLiked: false,
        isInCart: false,
      });

      // Make sure useFieldArray also has one empty field
      replace([""]);
    } catch (error) {
      console.error("PRODUCT ERROR:", error);

      alert(error?.message || "Something went wrong while saving the product");
    }
  };

  // --------------------------------
  // JSX
  // --------------------------------

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        {product ? "Update Product" : "Add Product"}
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* NAME */}
        <div>
          <label className="block font-medium mb-1">Product Name</label>

          <input
            type="text"
            {...register("name", {
              required: "Product name is required",
              maxLength: {
                value: 100,
                message: "Maximum 100 characters",
              },
            })}
            className="w-full border rounded px-3 py-2"
            placeholder="Enter product name"
          />

          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* DESCRIPTION */}
        <div>
          <label className="block font-medium mb-1">Description</label>

          <textarea
            {...register("description", {
              required: "Description is required",
              maxLength: {
                value: 2000,
                message: "Maximum 2000 characters",
              },
            })}
            className="w-full border rounded px-3 py-2"
            rows={5}
            placeholder="Enter product description"
          />

          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* PRICE + DISCOUNT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* PRICE */}
          <div>
            <label className="block font-medium mb-1">Price ($)</label>

            <input
              type="number"
              step="0.01"
              {...register("price", {
                required: "Price is required",
                valueAsNumber: true,
                min: {
                  value: 0,
                  message: "Price cannot be negative",
                },
              })}
              className="w-full border rounded px-3 py-2"
              placeholder="Enter price"
            />

            {errors.price && (
              <p className="text-red-500 text-sm mt-1">
                {errors.price.message}
              </p>
            )}
          </div>

          {/* DISCOUNT PRICE */}
          <div>
            <label className="block font-medium mb-1">Discount Price ($)</label>

            <input
              type="number"
              step="0.01"
              {...register("discountPrice", {
                valueAsNumber: true,

                validate: (value) => {
                  // Optional field
                  if (
                    value === undefined ||
                    value === null ||
                    value === "" ||
                    Number.isNaN(value)
                  ) {
                    return true;
                  }

                  // Price must be entered first
                  if (
                    price === "" ||
                    price === undefined ||
                    Number.isNaN(Number(price))
                  ) {
                    return "Enter regular price first";
                  }

                  // Discount must be lower
                  return (
                    Number(value) < Number(price) ||
                    "Discount price must be below regular price"
                  );
                },
              })}
              className="w-full border rounded px-3 py-2"
              placeholder="Enter discount price"
            />

            {errors.discountPrice && (
              <p className="text-red-500 text-sm mt-1">
                {errors.discountPrice.message}
              </p>
            )}
          </div>
        </div>

        {/* CATEGORY */}
        <div>
          <label className="block font-medium mb-1">Category</label>

          <select
            {...register("category", {
              required: "Category is required",
            })}
            className="w-full border rounded px-3 py-2"
          >
            <option value="">Select category</option>

            {CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          {errors.category && (
            <p className="text-red-500 text-sm mt-1">
              {errors.category.message}
            </p>
          )}
        </div>

        {/* STOCK */}
        <div>
          <label className="block font-medium mb-1">Stock</label>

          <input
            type="number"
            {...register("stock", {
              required: "Stock is required",
              valueAsNumber: true,
              min: {
                value: 0,
                message: "Stock cannot be negative",
              },
            })}
            className="w-full border rounded px-3 py-2"
          />

          {errors.stock && (
            <p className="text-red-500 text-sm mt-1">{errors.stock.message}</p>
          )}
        </div>

        {/* -------------------------------- */}
        {/* IMAGES */}
        {/* -------------------------------- */}

        <div>
          <div className="flex justify-between items-center mb-3">
            <label className="block font-medium">Product Images</label>

            <button
              type="button"
              onClick={() => append("")}
              className="bg-blue-500 text-white px-3 py-1 rounded"
            >
              + Add Image
            </button>
          </div>

          <div className="space-y-3">
            {fields.map((field, index) => (
              <div key={field.id} className="flex gap-2">
                <input
                  type="text"
                  {...register(`images.${index}`, {})}
                  className="flex-1 border rounded px-3 py-2"
                  placeholder={`Image URL ${index + 1}`}
                />

                <button
                  type="button"
                  onClick={() => remove(index)}
                  disabled={fields.length === 1}
                  className="bg-red-500 text-white px-3 py-2 rounded disabled:opacity-50"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {errors.images && (
            <p className="text-red-500 text-sm mt-1">
              Please check your image URLs
            </p>
          )}
        </div>

        {/* RATINGS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* RATING AVERAGE */}
          <div>
            <label className="block font-medium mb-1">Ratings Average</label>

            <input
              type="number"
              step="0.1"
              {...register("ratingsAverage", {
                valueAsNumber: true,
                min: {
                  value: 1,
                  message: "Minimum rating is 1",
                },
                max: {
                  value: 5,
                  message: "Maximum rating is 5",
                },
              })}
              className="w-full border rounded px-3 py-2"
            />

            {errors.ratingsAverage && (
              <p className="text-red-500 text-sm mt-1">
                {errors.ratingsAverage.message}
              </p>
            )}
          </div>

          {/* RATINGS QUANTITY */}
          <div>
            <label className="block font-medium mb-1">Ratings Quantity</label>

            <input
              type="number"
              {...register("ratingsQuantity", {
                valueAsNumber: true,
                min: {
                  value: 0,
                  message: "Cannot be negative",
                },
              })}
              className="w-full border rounded px-3 py-2"
            />

            {errors.ratingsQuantity && (
              <p className="text-red-500 text-sm mt-1">
                {errors.ratingsQuantity.message}
              </p>
            )}
          </div>
        </div>

        {/* CHECKBOXES */}
        <div className="border rounded p-4 space-y-4">
          <h2 className="font-semibold text-lg">Product Options</h2>

          {/* FEATURED */}
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              {...register("isFeatured")}
              className="w-5 h-5"
            />

            <span>Featured Product</span>
          </label>

          {/* LIKED */}
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              {...register("isLiked")}
              className="w-5 h-5"
            />

            <span>Liked</span>
          </label>

          {/* CART */}
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              {...register("isInCart")}
              className="w-5 h-5"
            />

            <span>In Cart</span>
          </label>
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded font-semibold hover:bg-green-700"
        >
          {product ? "Update Product" : "Add Product"}
        </button>
      </form>
    </div>
  );
}

export default AddProducts;
