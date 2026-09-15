import "./App.css";
import React, { useState } from "react";
const App = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [task, setTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    let copyTask = [...task];
    copyTask.push({title, detail})
    setTask(copyTask)
    setTitle("");
    setDetail("");
  };

  const deleteNote = (index) => {
    const copyTask = [...task];
    copyTask.splice(index, 1);
    setTask(copyTask);

  }

  return (
   <div className="container">

  <form onSubmit={submitHandler} className="form">
    <h1 className="form-title">Add Note</h1>

    <input
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      className="input"
      type="text"
      placeholder="Enter Notes Heading"
    />

    <textarea
      value={detail}
      onChange={(e) => setDetail(e.target.value)}
      className="textarea"
      placeholder="Enter Details"
    />

    <button className="btn">
      Add Note
    </button>
  </form>

  <div className="notes">
    <h1 className="notes-title">Your Notes</h1>

    <div className="notes-grid">
      {task.map((elem, idx) => {
        return (
          <div key={idx} className="card">
            <h3 className="card-title">{elem.title}</h3>
            <p className="card-text">{elem.detail}</p>
            <button onClick={() => deleteNote(idx)} className="delbtn">Delete</button>
          </div>
        );
      })}
    </div>
  </div>
</div>
  );
};

export default App;
