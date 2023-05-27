import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const CourseCreateModal = ({ show, handleClose, handleSubmit }) => {
  const [courseName, setCourseName] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = () => {
    const timeStamp = Math.floor(Date.now() / 1000);
    const submitPayload = {
      id: timeStamp,
      name: courseName,
      description,
    };

    handleSubmit(submitPayload);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={(e) => setCourseName(e.target.value)}
              type="text"
              placeholder="Enter name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control
              onChange={(e) => setDescription(e.target.value)}
              as={"textarea"}
              placeholder="Decription"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={onSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CourseCreateModal;
