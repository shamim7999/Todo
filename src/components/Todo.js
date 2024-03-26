import React from "react";
import { DModal } from "../DModal";
import "../css/Todos-Style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle, faStar, faTrash, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ todo, handleDelete, handleUpdateTodo, handleComplete }) => {
  const handleClickForDelete = (e) => {
    e.preventDefault();
    handleDelete(todo.id);
    console.log(todo.id);
  };

  const handleClickForComplete = (e) => {
      e.preventDefault();
      handleComplete(todo.id);
  }

  const renderPriorityStars = (priority) => {
    const stars = [];
    for (let i = 0; i < priority; i++) {
      stars.push(
        <FontAwesomeIcon key={i} icon={faStar} style={{ color: "gold" }} />
      );
    }
    return stars;
  };

  return (
    <div key={todo.id} className="myCard">
      <h1
        className={`myTitle bg-${todo._status.toLowerCase().replace(" ", "-")}`}
      >
        {todo.title}
      </h1>
      <div className="card-body">
        <h5 textAlign="center">{todo.description}</h5>
        {/* <div style={{ color: "red" }}>
          Priority: {renderPriorityStars(todo.priority)}
        </div> */}
        <div style={{ color: "blue" }}>{todo._status}</div>
        <div>
          <b className="last-updated">
            Last Updated {new Date(todo.updated).toLocaleString()}
          </b>
        </div>
        {renderPriorityStars(todo.priority)}{" "}
        {/* Priority stars beside Update button */}
        &nbsp;
        <div className="d-flex justify-content-center align-items-center">
          <DModal
            handleUpdateTodo={handleUpdateTodo}
            title="update"
            todo={todo}
          />
          &nbsp;
          

          <div className="text-center mt-3" style={{ cursor: 'pointer' }} >
            <FontAwesomeIcon
            icon={faTrash} // Use the delete icon
            style={{ fontSize: '23px', cursor: 'pointer', color: 'red' }} // Increase size and add pointer cursor
            onClick={handleClickForDelete}

          />
          </div>
          &nbsp;
          <div className="text-center mt-3" style={{ cursor: 'pointer' }} >
            <FontAwesomeIcon
            icon={faCheckCircle} // Use the delete icon
            style={{ fontSize: '23px', cursor: 'pointer', color: 'green' }} // Increase size and add pointer cursor
            onClick={handleClickForComplete}

          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
