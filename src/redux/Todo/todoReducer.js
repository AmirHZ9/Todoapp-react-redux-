import { v4 } from "uuid";
const initialState = {
  todo: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "addTodo":
      state.todo.push({
        id: v4(),
        todo: action.payload,
        editTodo: false,
        check: false,
      });

      return {
        ...state,
        todo: state.todo,
      };
    case "removeTodo":
      const newitem = state.todo.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        todo: newitem,
      };

    case "editTodo":
      action.payload.editTodo = !action.payload.editTodo;

      return {
        ...state,
      };

    case "checkTodo":
      action.payload.check = !action.payload.check;

      return {
        ...state,
      };

    default:
      return state;
  }
};

export default reducer;
