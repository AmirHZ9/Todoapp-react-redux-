import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo ,editTodo,confirmEditTodo} from "../redux/Todo/todoAction";
import style from '../style/todo.module.css'
export default function TodoApp() {
  const [todo, setTodo] = useState("");
  const state = useSelector((state) => state.todoState);
  const dispatch = useDispatch();
  const todoInput = useRef();
  const changeHandler = (event) => [setTodo(event.target.value)];
  const AddTodo = () => {
    if (todo.length > 0) {
      dispatch(addTodo(todo));
      setTodo("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={changeHandler}
        ref={todoInput}
      />
      <button onClick={AddTodo}>add</button>
      {state.todo.map((item) => (
        <div key={item.id} style={{ display: "flex" }}>
          <button>check</button>
          <p className={item.editTodo ?  style.enableEdit : style.disableTodo} contentEditable={item.editTodo} >{item.todo}</p>
          <button onClick={() => dispatch(editTodo(item))}>edit</button>
          <button onClick={() => dispatch(confirmEditTodo(item))}>check</button>
          <button onClick={() => dispatch(removeTodo(item))}>remove</button>
        </div>
      ))}
    </div>
  );
}
