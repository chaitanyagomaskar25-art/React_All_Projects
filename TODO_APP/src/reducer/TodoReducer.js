const savedTodos = localStorage.getItem("todos");

export const intialState = savedTodos ? JSON.parse(savedTodos) : [];

export const todoReducer = (state, action) => {
  let nextState;

  switch (action.type) {
    case "ADD_TODO":
      nextState = [
        ...state,
        { id: Date.now(), completed: false, ...action.payload },
      ];
      break;
    case "DELETE":
      nextState = state.filter((todo) => todo.id !== action.payload);
      break;
    case "DONE":
      nextState = state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo,
      );
      break;
    case "EDIT":
      nextState = state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, ...action.payload } : todo,
      );
      break;
    default:
      throw new Error("Invalid Action Type");
  }
  localStorage.setItem("todos", JSON.stringify(nextState));
  return nextState;
};
