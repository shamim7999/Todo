import React from "react";
import DNoteForm from "../DNoteForm";
import { DModal } from "../DModal";
import "../css/Todos-Style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const Todo = ({ todo, handleDelete, handleUpdateTodo }) => {
  const handleClickForDelete = (e) => {
    e.preventDefault();
    handleDelete(todo.id);
    console.log(todo.id);
  };
  // console.log(todo)

  // const handleClickForUpdate = (e) => {
  //   e.preventDefault();
  //   handleUpdate(todo, 'Update Todo');
  //   console.log(todo);
  // }

  return (
    <div key={todo.id}>
      {/* <td>{todo.id}</td> */}
      <h1>{todo.title}</h1>
      <h5 textAlign="center">{todo.description}</h5>
      <div style={{ color: "red" }}>Priority: {todo.priority}</div>
      <div>
        <b>Created At - </b>
        {new Date(todo.created).toLocaleString()}
      </div>
      <div>
        {" "}
        <b>Updated At - </b> {new Date(todo.updated).toLocaleString()}
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <DModal
          handleUpdateTodo={handleUpdateTodo}
          title="update"
          todo={todo}
        /> &nbsp;
        <button className="btn btn-danger mt-2" onClick={handleClickForDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
