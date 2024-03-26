import React, { useEffect, useState } from "react";
import { DModal } from "./DModal";
import Todos from "./components/Todos";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import SearchBar from "./components/SearchPage";

const DNoteForm = () => {
  const [todos, setTodos] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );

  const [viewTodos, setViewTodos] = useState(todos);

  const [open, setOpen] = useState(false);

  console.log(todos);

  useEffect(() => {
    console.log("useEffect called");
    localStorage.setItem("todos", JSON.stringify([...todos]));
    setViewTodos(todos);
  }, [todos]);

  const handleNewTodo = (newTodo) => {
    console.log("I am here");
    setTodos([...todos, newTodo]);
    setViewTodos(todos);
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleComplete = (id) => {
    console.log(`In Complete for id: ${id}`);
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if(todo.id === id) {
          todo._status = 'Completed';
        }
        return todo;
      });
    });
  }
  

  const handleOpen = () => {
    setOpen(true);
    console.log("Clicked and here");
  };

  const handleCloseFromDNoteForm = () => {
    setOpen(false);
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

  const handleShowAllTodos = () => {
      setViewTodos(todos);
  }

  const handleShowCompletedTodos = () => {
      const completedTodos = todos.filter((todo) => todo._status === 'Completed');
      setViewTodos(completedTodos);
  }

  
  
  const handleShowPendingTodos = () => {
    const pendingTodos = todos.filter((todo) => todo._status === 'Pending');
    setViewTodos(pendingTodos);
  }

  const handleShowInProgressTodos = () => {
    const inProgressTodos = todos.filter((todo) => todo._status === 'In Progress');
    setViewTodos(inProgressTodos);
  }

  const handleSearch = (searchText) => {
    const filteredTodos = todos.filter((todo) =>
      todo.title.toLowerCase().includes(searchText.toLowerCase()) ||
      todo.description.toLowerCase().includes(searchText.toLowerCase())
    );
    setViewTodos(filteredTodos);
};


  return (
    <div>
      <div className='text-center m-5'>
      <Button variant="success" onClick={handleShowInProgressTodos}>In Progress Todos</Button>{' '}
        <Button variant="secondary" onClick={handleShowPendingTodos} >Pending Todos</Button>{' '}
        <Button variant="primary" onClick={handleShowAllTodos}>All Todos</Button>{' '}
        <Button variant="warning" onClick={handleShowCompletedTodos} >Completed Todos</Button>{' '}
    </div>
      <SearchBar handleSearch={handleSearch}/>
      <DModal
        
        title="Add Todo"
        handleNewTodo={handleNewTodo}
        open={open}
        handleCloseFromDNoteForm={handleCloseFromDNoteForm}
        handleOpen={handleOpen}
      />
      
      <Todos
        handleUpdateTodo={handleUpdateTodo}
        todos={viewTodos}
        handleDelete={handleDelete}
        open={open}
        handleCloseFromDNoteForm={handleCloseFromDNoteForm}
        handleOpen={handleOpen}
        handleComplete={handleComplete}
      />
    </div>
  );
};

export default DNoteForm;
