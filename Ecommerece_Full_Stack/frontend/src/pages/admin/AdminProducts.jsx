import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, fetchProducts } from "../../redux/productSlice";

function AdminProducts() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleUpdate = (product) => {
    navigate("/admin/add-products", {
      state: {
        product: product,
      },
    });
  };

  return (
    <div>
      {products.map((product) => (
        <div key={product._id}>
          {/* Product Name */}
          <h3>{product.name}</h3>

          {/* Description */}
          <p>{product.description}</p>

          {/* Price */}
        <div>
  <strong>Price:</strong>{" "}

  {product.discountPrice ? (
    <>
      <span
        style={{
          textDecoration: "line-through",
          marginRight: "10px",
          color: "gray",
        }}
      >
        ${product.price}
      </span>

      <span>
        ${product.price - product.discountPrice}
      </span>
    </>
  ) : (
    <span>${product.price}</span>
  )}
</div>

          {/* Category */}
          <p>
            <strong>Category:</strong> {product.category}
          </p>

          {/* Stock */}
          <p>
            <strong>Stock:</strong> {product.stock}
          </p>

          {/* Ratings */}
          <p>
            <strong>Rating:</strong> ⭐ {product.ratingsAverage}
          </p>

          <p>
            <strong>Ratings Quantity:</strong> {product.ratingsQuantity}
          </p>

          {/* Images */}
          <div>
            <strong>Images:</strong>

            <div>
              {product.images?.map((image, index) => (
                <img
                  key={index}
                  width={200}
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Product Status */}
          <div>
            <p>
              <strong>Featured:</strong>{" "}
              {product.isFeatured ? "Yes" : "No"}
            </p>

            <p>
              <strong>Liked:</strong>{" "}
              {product.isLiked ? "Yes ❤️" : "No 🤍"}
            </p>

            <p>
              <strong>In Cart:</strong>{" "}
              {product.isInCart ? "Yes 🛒" : "No"}
            </p>
          </div>

          {/* Dates */}
          <p>
            <strong>Created:</strong>{" "}
            {new Date(product.createdAt).toLocaleString()}
          </p>

          <p>
            <strong>Updated:</strong>{" "}
            {new Date(product.updatedAt).toLocaleString()}
          </p>

          {/* Actions */}
          <button onClick={() => handleUpdate(product)}>
            Update
          </button>

          <button onClick={() => handleDelete(product._id)}>
            Delete
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default AdminProducts;