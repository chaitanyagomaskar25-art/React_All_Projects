const DeleteNodeFromList = (itemId, setData) => {
  const updateTree = (list) => {
    return list
      .filter((node) => node.id !== itemId)
      .map((node) => {
        if (node.children) {
          return {
            ...node,
            children: updateTree(node.children),
          };
        }
        return node;
      });
  };
  setData((prev) => updateTree(prev));
};

export default DeleteNodeFromList;
