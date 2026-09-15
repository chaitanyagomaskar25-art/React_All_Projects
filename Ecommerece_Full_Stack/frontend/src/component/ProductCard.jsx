import { useNavigate } from "react-router";
import { useAuthContext } from "../context/AuthContext";

export const ProductCard = ({ product }) => {

  const loggedIn = useAuthContext();
  const navigate = useNavigate();

  const handleAddToCart = () => {

    if (!loggedIn) {
      navigate("/login");
      return;
    }

    console.log("Product added to cart");
  };

  return (
    <div>
      <h2>{product.name}</h2>

      <button onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};