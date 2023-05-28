import { Button, Modal } from "react-bootstrap";

const CourseDeleteModal = ({ show, handleClose, onAgree }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          No
        </Button>
        <Button variant="error" onClick={onAgree}>
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CourseDeleteModal;
