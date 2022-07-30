export const addTodo = (todo) => {
  return { type: "addTodo", payload: todo };
};
export const removeTodo = (todo) => {
  return { type: "removeTodo", payload: todo };
};

export const editTodo = (todo) => {
  return { type: "editTodo", payload: todo };
};
export const confirmEditTodo = (todo) => {
    return { type: "confirmEditTodo", payload: todo };
  };
  