import { createContext, useContext, useReducer } from "react";
import { initialState, taskReducer } from "../reducer/TaskReducer";

const TaskContext = createContext();
const DispatchContext = createContext();

export const TaskContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  return (
    <TaskContext value={state}>
      <DispatchContext value={dispatch}>{children}</DispatchContext>
    </TaskContext>
  );
};

export const useTaskContext = () => {
  const result = useContext(TaskContext);
  if (result === undefined) {
    throw new Error("Tasks Context is undefined");
    return;
  }
  return result; 
};

export const useDisptachContext = () => {
  const result = useContext(DispatchContext);
  if (result === undefined) {
    throw new Error("Dispatch Context is undefined");
    return;
  }
  return result;
};
