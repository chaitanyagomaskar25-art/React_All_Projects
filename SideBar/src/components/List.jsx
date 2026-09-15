import { useState } from "react";

const List = ({ list, addNewToList, deleteNodeFromList }) => {
  const [isExpand, setIsExpand] = useState({});
  return (
   <div className="tree-container">
  {list.map((node) => (
    <div key={node.id} className="tree-node">
      <div className="node-row">
        {/* Toggle Icon */}
        <div className="icon-wrapper">
          {node.isFolder && (
            <span
              className={`toggle-icon ${isExpand?.[node.id] ? "expanded" : ""}`}
              onClick={() =>
                setIsExpand((prev) => ({
                  ...prev,
                  [node.id]: !prev[node.id],
                }))
              }
            >
              ▶
            </span>
          )}
        </div>

        {/* Node Name */}
        <span className={`node-name ${node.isFolder ? "folder" : "file"}`}>
          {node.isFolder ? "📂" : "📄"} {node.name}
        </span>

        {/* Action Buttons */}
        <div className="node-actions">
          {node?.isFolder && (
            <button className="btn-add" onClick={() => addNewToList(node.id)} title="Add Item">
              +
            </button>
          )}
          <button className="btn-delete" onClick={() => deleteNodeFromList(node.id)} title="Delete">
            ×
          </button>
        </div>
      </div>

      {/* Recursive Children */}
      {isExpand?.[node.id] && node.children && (
        <div className="node-children">
          <List
            list={node.children}
            addNewToList={addNewToList}
            deleteNodeFromList={deleteNodeFromList}
          />
        </div>
      )}
    </div>
  ))}
</div>
  );
};

export default List;
