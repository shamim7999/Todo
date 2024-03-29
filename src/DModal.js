import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import MyForm from "./components/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

export const DModal = ({
  handleNewTodo,
  title,
  todo,
  handleUpdateTodo,
  open,
  handleCloseFromDNoteForm,
  handleOpen
}) => {
  const [show, setShow] = useState(open);

  // Synchronize the `show` state with the `open` prop
  useEffect(() => {
    setShow(open);
  }, [open]);

  const myTodoData = todo
    ? todo
    : {
        id: "",
        title: "",
        description: "",
        priority: "1",
        created: "",
        updated: "",
      };

  const handleClose = () => {
    setShow(false);
    if(handleCloseFromDNoteForm)
      handleCloseFromDNoteForm();
  };

  const handleShow = () => {
    setShow(true);
    if(handleOpen)
      handleOpen();
  };

  const isUpdate = todo ? true : false;
  const handleTodo = todo ? handleUpdateTodo : handleNewTodo;

  return (
    <>
      {title === 'update' && (
        <div className="text-center mt-3" style={{ cursor: 'pointer' }} onClick={handleShow}>
          <FontAwesomeIcon icon={faEdit} style={{ fontSize: '24px', color: '#007bff' }} /> {/* Edit icon */}
        </div>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title} todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MyForm
            isUpdate={isUpdate}
            myData={myTodoData}
            handleTodo={handleTodo}
            handleClose={handleClose}
          />
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};
