import React, { useState } from "react";
import "./App.css"
import json from "./components/data.json";
import List from "./components/List";
import AddNewToList from "./components/Add";
import DeleteNodeFromList from "./components/Delete";
const App = () => {
  const [data, setData] = useState(json);

  return (
    <div>
      <h1>File Folder Explorer</h1>
      <List
        list={data}
        addNewToList={(parentId) => AddNewToList(parentId, setData)}
        deleteNodeFromList={(itemId) => DeleteNodeFromList(itemId, setData)}
      />
    </div>
  );
};

export default App;
