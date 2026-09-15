import { createContext, useReducer, useContext } from "react";
import { initialState, CartReducer } from "../reducer/CardReducer";

const CartContext = createContext();
const DispatchContext = createContext();

const ContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(CartReducer, initialState);

  return (
    <CartContext value={cart}>
      <DispatchContext value={dispatch}>
        {children}
      </DispatchContext>
    </CartContext>
  );
};

const useCartState = () => {
  const cartState = useContext(CartContext);
  if (cartState === undefined) {
    throw new Error("CartState error");
  }
  return cartState;
};

const useDispatchState = () => {
  const dispatchState = useContext(DispatchContext);
  if (dispatchState === undefined) {
    throw new Error("Dispatch erro");
  }
  return dispatchState;
};

export { ContextProvider, useCartState, useDispatchState };
