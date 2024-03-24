import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import MyForm from "./components/Form";

export const DModal = ({ handleNewTodo, title , todo, handleUpdateTodo}) => {
  const [show, setShow] = useState(false);
  const myTodoData = todo? todo : {id: '', title: "", description: "", priority: '1', created: '', updated: '' }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const isUpdate = todo? true: false;
  const handleTodo = todo? handleUpdateTodo : handleNewTodo;
  
  return (
    <>
      <div className="text-center mt-3">
        <Button className="" variant="outline-primary" onClick={handleShow}>
          {title}
        </Button>
        
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title} form</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
          <MyForm isUpdate ={isUpdate} myData = {myTodoData}  handleTodo={handleTodo} handleClose={handleClose} />
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
