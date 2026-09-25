import React, { useState } from "react";
import CreateForm from "../components/CreateForm";
import { useTaskContext } from "../context/TaskContextProvider";
import TaskCard from "../components/TaskCard";
import { useDebounced } from "../hooks/useDebounced";

const Task = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("Study");
  const [priority, setPriority] = useState("High");
  const [editingId, setEditingId] = useState(null); 

  const tasks = useTaskContext();
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounced(search, 500);
  const filteredtask = tasks.filter((task) =>
    task.title.toLowerCase().includes(debouncedSearch.toLowerCase()),
  );

  const resetForm = () => {
    setTitle("");
    setDesc("");
    setCategory("Study");
    setPriority("High");
    setEditingId(null);
  };

  const handleEditClick = (task) => {
    setTitle(task.title);
    setDesc(task.desc);
    setCategory(task.category);
    setPriority(task.priority);
    setEditingId(task.id);
  };

  return (
    <div>
      <h2>Task manager</h2>
      <CreateForm
        title={title}
        setTitle={setTitle}
        desc={desc}
        setDesc={setDesc}
        category={category}
        setCategory={setCategory}
        priority={priority}
        setPriority={setPriority}
        editingId={editingId}
        onDone={resetForm}
      />
      <div>
        <br />
        <br />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search....."
        />
      </div>
      <div>
        {filteredtask.map((task) => (
          <div key={task.id}>
            <TaskCard task={task} onEdit={handleEditClick} />
          </div>
        ))}{" "}
      </div>
    </div>
  );
};
export default Task;
