import { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import CourseCreateModal from "./components/courseCreateModal";
import courseService from "./utils/service";

const MateriCRUD = () => {
  const [courses, setCourses] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const toggleCreateModal = () => {
    setShowCreateModal(!showCreateModal);
  };

  const handleAddCourse = (payload) => {
    courseService.addCourse(payload);
    toggleCreateModal();
    fetchCourses();
  };

  const fetchCourses = () => {
    const resp = courseService.getCourses();
    setCourses(resp.data);
  };

  useEffect(() => {
    fetchCourses();
  }, []);
  return (
    <Container style={{ paddingTop: "72px" }}>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <Button onClick={toggleCreateModal} variant={"success"}>
            Add
          </Button>
          <Table>
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => {
                return (
                  <tr key={course.id}>
                    <td>{index + 1}</td>
                    <td>{course.name}</td>
                    <td>{course.description}</td>
                    <td>-</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
      <CourseCreateModal
        show={showCreateModal}
        handleClose={toggleCreateModal}
        handleSubmit={handleAddCourse}
      />
    </Container>
  );
};

export default MateriCRUD;
