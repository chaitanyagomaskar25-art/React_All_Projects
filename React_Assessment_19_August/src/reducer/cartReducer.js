export const initialState = [];

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const product = state.find((p) => p.id === action.payload.id);
      if (product) {
        return state.map((p) =>
          p.id === action.payload.id ? { ...p, quantity: p.quantity + 1 } : p,
        );
      }
      return [...state, action.payload];
    case "REMOVE_FROM_CART":
      return state.filter((product) => product.id !== action.payload);
    case "INCREASE":
      return state.map((p) =>
        p.id === action.payload
          ? {
              ...p,
              quantity: p.quantity + 1,
            }
          : p,
      );

    case "DECREASE":
      return state.map((p) =>
        p.id === action.payload
          ? {
              ...p,
              quantity: Math.max(1, p.quantity - 1),
            }
          : p,
      );
    case "CLEAR_CART":
      return [];
    default:
      throw new Error("Invaliid Action Type");
  }
};
