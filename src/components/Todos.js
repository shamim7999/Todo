import React from 'react';
import { Table } from 'react-bootstrap';
import Todo from './Todo'; // Import the Todo component

const Todos = ({ todos, handleDelete }) => {
  console.log(todos);

  return (
    <div className='todos'>
      <Table striped bordered hover className='text-center'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Priority</th>
            <th>Created</th>
            <th>Updated</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            // Render each todo using the Todo component
            <Todo key={todo.id} todo={todo} handleDelete={handleDelete} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Todos;
