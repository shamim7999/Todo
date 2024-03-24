import React from 'react';
import { Table } from 'react-bootstrap';
import Todo from './Todo'; // Import the Todo component
import '../css/Card-Style.css'

const Todos = ({ todos, handleDelete , handleUpdateTodo}) => {
  console.log("inside todos.js");

  return (
    <div>
      <section>
        <div className='container'>
          <h1>My Todo List</h1>
          <div className='cards'>
          {
            todos.map((todo, i) => (
              // Render each todo using the Todo component
              <div key={i} className='card'>
                <Todo handleUpdateTodo={handleUpdateTodo} key={todo.id} todo={todo} handleDelete={handleDelete} />
              </div>
            ))
          }
          </div>
        </div>
      </section>
    </div>
  );
};

export default Todos;
