import React, { useState } from "react";
import { useDisptachContext } from "../context/TaskContextProvider";

const CreateForm = ({title, setTitle, desc, setDesc, category, setCategory, priority, setPriority,  editingId, onDone,}) => {
  const dispatch = useDisptachContext()
  const handleSubmit = () => {
    if (editingId) {
      dispatch({
        type: "Edit",
        payload: { id: editingId, updates: { title, desc, category, priority } },
      });
    } else {
      dispatch({
        type: "ADD",
        payload: { id: Date.now(), title, desc, category, priority, completed: false },
      });
    }
    onDone(); // clears fields + exits edit mode either way
  };
    return (
    <div>
      <h3>{editingId ? "Edit Task" : "Add New Task"}</h3>
      <div>
        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="e.g Study React Component" />
        <input value={desc} onChange={(e) => setDesc(e.target.value)} type="text" placeholder="Description" />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Study">Study</option>
          <option value="Coding">Coding</option>
          <option value="Personal">Personal</option>
          <option value="Health">Health</option>
        </select>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
      <button onClick={handleSubmit}>{editingId ? "Save" : "Add"}</button>
      {editingId && <button onClick={onDone}>Cancel</button>}
    </div>
  );
};

export default CreateForm;
