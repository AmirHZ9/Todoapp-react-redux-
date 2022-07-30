import { v4 } from "uuid";
const initialState = {
  todo: [],

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "addTodo":
      state.todo.push({ id: v4(), todo: action.payload ,  editTodo:false });
console.log(state)
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
        action.payload.editTodo = true
        console.log(state)
          return{
              ...state
          }
          case "confirmEditTodo" :
            action.payload.editTodo = false
              return{
                  ...state
              }
    default:
      return state;
  }
};

export default reducer;
