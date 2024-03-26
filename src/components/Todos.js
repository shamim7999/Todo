import React from "react";
import Todo from "./Todo"; // Import the Todo component


import "../css/Card-Style.css";
import CardWithPlus from "./AddIcon";

const Todos = ({
  todos,
  handleDelete,
  handleUpdateTodo,
  handleOpen,
  handleComplete
}) => {
  //console.log("inside todos.js");

  const handleClick = (e) => {
    console.log("I am here in Todos.js");
    handleOpen();
  };

  return (
    <div>
      <section>
        <div className="container">
          <h1>My Todo List</h1>
          <div className="cards">
            {todos.map((todo, i) => (
              // Render each todo using the Todo component
              <div key={i} className="card">
                <Todo
                  handleUpdateTodo={handleUpdateTodo}
                  key={todo.id}
                  todo={todo}
                  handleDelete={handleDelete}
                  handleComplete={handleComplete}
                />
              </div>
            ))
            }
            <div>
              <CardWithPlus onClick={handleClick} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Todos;
