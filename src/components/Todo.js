import React from 'react';

const Todo = ({ todo, handleDelete }) => {

   const handleClickForDelete = (e) => {
        e.preventDefault();
        handleDelete(todo.id);
        console.log(todo.id);
   }

  return (
    <tr key={todo.id}>
      <td>{todo.id}</td>
      <td>{todo.title}</td>
      <td>{todo.description}</td>
      <td>{todo.priority}</td>
      <td>{new Date(todo.created).toLocaleString()}</td>
      <td>{new Date(todo.updated).toLocaleString()}</td>
      <td>
        <button className='btn btn-success' >Update</button> &nbsp;
        <button className='btn btn-danger' onClick={handleClickForDelete}>Delete</button>
      </td>
    </tr>
  );
};

export default Todo;
