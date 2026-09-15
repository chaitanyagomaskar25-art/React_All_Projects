import React, { useState } from "react";
import { useTodoDispatch } from "../context/TodoContext";
import { useForm } from "react-hook-form";
import TodoForm from "./TodoForm";

const TodoCard = ({ todo }) => {
  const dispatch = useTodoDispatch();
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <input
        type="checkbox"
        onChange={() => dispatch({ type: "DONE", payload: todo.id })}
        checked={todo.completed}
      />
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <button onClick={() => dispatch({ type: "DELETE", payload: todo.id })}>
        Delete
      </button>
      <button onClick={() => setIsEditing((prev) => !prev)}>Edit</button>
      {isEditing && (
       <TodoForm todo={todo} onClose={()=>setIsEditing(false)} />
      )}
    </div>
  );
};

export default TodoCard;
