export const initialState = [
  {
    id: 1,
    title: "Learn Node.js",
    desc: "Study Node.js modules and the event loop",
    completed: false,
    priority : "high",
    category: "study"
  },
  {
    id: 2,
    title: "Build Todo API",
    desc: "Create CRUD APIs using Express.js",
    completed: false,
    priority : "high",
    category: "study"
  },
  {
    id: 3,
    title: "Practice React",
    desc: "Build a small React project using useState and useEffect",
    completed: true,
    priority : "high",
    category: "study"
  },
  {
    id: 4,
    title: "Learn MongoDB",
    desc: "Understand databases, collections, and CRUD operations",
    completed: false,
    priority : "high",
    category: "study"
  },
  {
    id: 5,
    title: "Connect Frontend and Backend",
    desc: "Connect the React frontend with the Express backend API",
    completed: false,
    priority : "high",
    category: "study"
  }
];

export const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload]
    case "Done":
        return state.map(todo=>todo.id === action.payload.id ? {...todo, completed : !action.payload.completed }: todo)
    case "Delete":
        return state.filter(todo=>todo.id!==action.payload)
    case "Edit":
        return state.map(todo=>todo.id === action.payload.id ? { ...todo, ...action.payload.updates } : todo)
    default:
        throw new Error("Invalid Action Type");
  }
};
