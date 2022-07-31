export const addTodo = (todo) => {
  return { type: "addTodo", payload: todo };
};

export const removeTodo = (todo) => {
  return { type: "removeTodo", payload: todo };
};

export const EditTodo = (todo) => {
  return { type: "editTodo", payload: todo };
};

export const checkTodo = (todo) => {
  return { type: "checkTodo", payload: todo };
};


