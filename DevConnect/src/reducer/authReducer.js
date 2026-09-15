export const initialState = [
  {
    user: null,
    token: null,
    role: null,
    isAuthenticated: false,
  },
];

export function AuthReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        role: action.payload.eolw,
        isAuthenticated: true,
      };
    case "LOGOUT":
      return {
        user: null,
        token: null,
        role: null,
        isAuthenticated: false,
      };
    default:
      throw new Error("Invalid action type");
  }
}
