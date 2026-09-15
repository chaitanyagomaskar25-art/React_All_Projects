import React, { useState } from "react";
import { useTodoContext } from "../context/TodoContext";
import TodoCard from "../components/TodoCard";
import TodoForm from "../components/TodoForm";

const Todos = () => {
  const todos = useTodoContext();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currenTodos = todos.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(todos.length / itemsPerPage);

  return (
    <div>
      {currenTodos.map((todo) => (
        <TodoCard todo={todo} key={todo.id} />
      ))}
      {totalPages > 1 && (
        <div>
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          >
            Prev
          </button>
          <p>
            page {currentPage} of {totalPages}
          </p>
          <button
            disabled={currentPage === totalPages}
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Todos;
