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

const courseService = {
  addCourse,
  getCourses,
};

export default courseService;
