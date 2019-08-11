export const initTodoStore = () => {
  if (!localStorage.getItem("todos")) {
    localStorage.setItem("todos", JSON.stringify([]));
  }
};

export const cleanTodoStore = () => {
  localStorage.setItem("todos", JSON.stringify([]));
};

export const getStoreTodos = () => {
  return JSON.parse(localStorage.getItem("todos"));
};

export const setStoreTodos = payload => {
  localStorage.setItem("todos", JSON.stringify(payload));
};
