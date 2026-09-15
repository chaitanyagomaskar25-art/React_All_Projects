const AddNewToList = (parentId, setData) => {
  const name = prompt("Enter Name");
  if (!name) return;

  const updateTree = (list) => {
    return list.map((node) => {
      if (node.id === parentId) {
        return {
          ...node,
          children: [
            ...(node.children || []),
            {
              id: Date.now().toString(),
              name: name,
              isFolder: true,
              children: [],
            },
          ],
        };
      }
      if (node.children) {
        return { ...node, children: updateTree(node.children) };
      }
      return node;
    });
  };
  setData((prev) => updateTree(prev));
};

export default AddNewToList;
