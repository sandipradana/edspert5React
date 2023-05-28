import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const CourseEditModal = ({ show, handleClose, handleSubmit, data }) => {
  const [courseName, setCourseName] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = () => {
    const submitPayload = {
      id: data.id,
      name: courseName,
      description,
    };

    handleSubmit(submitPayload);
  };

  useEffect(() => {
    setCourseName(data.name);
    setDescription(data.description);
  }, [data]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={(e) => setCourseName(e.target.value)}
              type="text"
              placeholder="Enter name"
              defaultValue={courseName}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control
              onChange={(e) => setDescription(e.target.value)}
              as={"textarea"}
              placeholder="Decription"
              defaultValue={description}
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

export default CourseEditModal;
