import React from "react";
import { useForm } from "react-hook-form";
import { useTodoDispatch } from "../context/TodoContext";

const TodoForm = ({ todo, onClose }) => {
  const dispatch = useTodoDispatch();
  const isEditMode = !!todo;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: {
      title: todo ? todo.title : "",
      description: todo ? todo.description : "",
    },
  });
  
  const onSubmit = (data) => {
    if (isEditMode) {
      dispatch({ type: "EDIT", payload: { id: todo.id, ...data } });
      onClose();
    } else {
      dispatch({ type: "ADD_TODO", payload: data });
      alert("Your todo created successfully.")
      reset()
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>{isEditMode ? "Edit Todo" : "Add New Todo"}</h3>
      <input
        {...register("title", {
          required: "Title is required",
          minLength: {
            value: 5,
            message: "Title should contains at least 5 characters",
          },
          maxLength: {
            value: 50,
            message: "Title should not contains more than 50 character.",
          },
        })}
        type="text"
        placeholder="title"
      />
      {errors.title && <p>{errors.title.message}</p>}
      <input
        {...register("description", {
          required: "Title is required",
          minLength: {
            value: 5,
            message: "Title should contains at least 5 characters",
          },
          maxLength: {
            value: 50,
            message: "Title should not contains more than 50 character.",
          },
        })}
        type="text"
        placeholder="description"
      />
      {errors.description && <p>{errors.description.message}</p>}
      <button type="submit">{isEditMode ? "Save" : "Add"}</button>
      {isEditMode && (
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      )}
    </form>
  );
};

export default TodoForm;
