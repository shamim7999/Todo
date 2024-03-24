import React, { useEffect, useState } from "react";
import { DModal } from "./DModal";
import Todos from "./components/Todos";
import CompletedTodos from "./components/CompletedTodos";

const DNoteForm = () => {
  const [todos, setTodos] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );
  console.log(todos);

  useEffect(() => {
    console.log("useEffect called");
    localStorage.setItem("todos", JSON.stringify([...todos]));
  }, [todos]);

  const handleNewTodo = (newTodo) => {
    console.log("I am here");
    setTodos([...todos, newTodo]);
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleUpdateTodo = (todo) => {
     const updatedTodos = todos.map((temp) => {
      if (todo.id === temp.id) {
        temp = todo;
      }
      return temp;
    });

    

    setTodos(updatedTodos);

  };

  return (
    <div>
      <DModal title="Add Todo" handleNewTodo={handleNewTodo} />
      {/* <CompletedTodos  /> */}
      <Todos
        handleUpdateTodo={handleUpdateTodo}
        todos={todos}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default DNoteForm;
