import React, { memo } from "react";
import { useDisptachContext } from "../context/TaskContextProvider";
import CreateForm from "./CreateForm";

const TaskCard = memo(({ task, onEdit }) => {
  const dispatch = useDisptachContext();

  return (
    <>
      <h3>{task.title}</h3>
      <p>{task.desc}</p>
      <p>{task.priority}</p>
      <p>{task.category}</p>
      <p>{task.completed ? "Pending" : "Done"}</p>
      <button
        onClick={() =>
          dispatch({
            type: "Done",
            payload: { id: task.id, completed: task.completed },
          })
        }
      >
        Completed
      </button>
      <button onClick={() => dispatch({ type: "Delete", payload: task.id })}>
        Delete
      </button>
      <button onClick={() => onEdit(task)}>Edit</button>
    </>
  );
});

export default TaskCard;
