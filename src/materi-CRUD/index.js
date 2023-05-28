import { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import CourseCreateModal from "./components/courseCreateModal";
import CourseEditModal from "./components/courseEditModal";
import CourseDeleteModal from "./components/courseDeleteModal";
import courseService from "./utils/service";

const MateriCRUD = () => {
  const [courses, setCourses] = useState([]);
  const [showCourseEditModal, setShowCourseEditModal] = useState(false);
  const [showCourseDeleteModal, setShowCourseDeleteModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState({});
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

  const openEditModal = (courseData) => {
    setSelectedCourse(courseData);
    setShowCourseEditModal(true);
  };

  const closeEditModal = () => {
    setSelectedCourse({});
    setShowCourseEditModal(false);
  };

  const handleEditCourse = (payload) => {
    const { id, ...others } = payload;
    courseService.updateCourse(id, others);
    closeEditModal();
    fetchCourses();
  };

  const openDeleteModal = (courseData) => {
    setSelectedCourse(courseData);
    setShowCourseDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setSelectedCourse({});
    setShowCourseDeleteModal(false);
  };

  const handleDeleteCourse = () => {
    const { id } = selectedCourse;
    courseService.deleteCourse(id);
    closeDeleteModal();
    fetchCourses();
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
                    <td>
                      <Button
                        onClick={() => openEditModal(course)}
                        variant={"warning"}
                      >
                        Update
                      </Button>{" "}
                      <Button
                        onClick={() => openDeleteModal(course)}
                        variant={"danger"}
                      >
                        Delete
                      </Button>
                    </td>
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
      <CourseEditModal
        show={showCourseEditModal}
        handleClose={closeEditModal}
        handleSubmit={handleEditCourse}
        data={selectedCourse}
      />
      <CourseDeleteModal
        show={showCourseDeleteModal}
        handleClose={closeDeleteModal}
        onAgree={handleDeleteCourse}
      />
    </Container>
  );
};

export default MateriCRUD;
