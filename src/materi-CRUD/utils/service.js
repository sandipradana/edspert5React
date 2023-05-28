import storageManager from "./storageManager";

const addCourse = (payload) => {
  const currItem = storageManager.get();
  if (currItem !== null) {
    const combinedItem = [...currItem, payload];
    storageManager.set(combinedItem);
  } else {
    storageManager.set([payload]);
  }

  return {
    data: payload,
  };
};

const getCourses = () => {
  const allCourses = storageManager.get();
  const response = {
    data: allCourses !== null ? allCourses : [],
  };
  return response;
};

const updateCourse = (courseId, payload) => {
  const listCourses = storageManager.get();
  const updatedCourse = listCourses.map((item) => {
    if (item.id === courseId) {
      return {
        ...item,
        ...payload,
      };
    }
    return item;
  });
  storageManager.set(updatedCourse);
};

const deleteCourse = (courseId) => {
  const listCourses = storageManager.get();
  const newCourses = listCourses.filter((item) => item.id !== courseId);

  storageManager.set(newCourses);
};

const courseService = {
  addCourse,
  getCourses,
  updateCourse,
  deleteCourse,
};

export default courseService;
