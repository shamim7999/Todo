// src/components/Modal.js
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyModal({ toggleModal }) {
  return (
    <div
      className="modal show"
      style={{ display: 'inline-block', position: 'initial' , zIndex: 10000}}
    >
      <Modal.Dialog>
        <Modal.Header closeButton onClick={toggleModal}> {/* Add onClick handler to close button */}
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>Close</Button> {/* Add onClick handler to close button */}
          <Button variant="primary" type='button'>Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default MyModal;
