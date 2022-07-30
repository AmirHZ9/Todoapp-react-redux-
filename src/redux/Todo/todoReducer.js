import { v4 } from "uuid";
const initialState = {
  todo: [],

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "addTodo":
      state.todo.push({ id: v4(), todo: action.payload ,  editTodo:false ,check:false});

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
  
        return{
            ...state
        }
    case "confirmEditTodo" :
    action.payload.editTodo = false
        return{
            ...state
        }

    case "checkTodo" :
     
        action.payload.check = !action.payload.check
        console.log(action.payload.check)
        console.log(state)
            return{
                ...state
            }   

    default:
      return state;
  }
};

export default reducer;
