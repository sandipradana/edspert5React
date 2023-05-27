// const dummy = [
//   {
//     id: 1,
//     name: 'course 1',
//     description: 'description 1'
//   }
// ]
const storageKeyName = "reactJS";

const setItem = (value) => {
  const valueToString = JSON.stringify(value);
  localStorage.setItem(storageKeyName, valueToString);
};

const getItem = () => {
  const data = localStorage.getItem(storageKeyName);
  if (data) {
    return JSON.parse(data);
  }
  return null;
};

const storageManager = {
  set: setItem,
  get: getItem,
};

export default storageManager;
