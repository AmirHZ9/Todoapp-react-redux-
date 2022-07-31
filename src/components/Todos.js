import React, { useState } from "react";
import { addTodo } from "../redux/Todo/todoAction";
import { useDispatch } from "react-redux";
import style from "../style/todos.module.css";
import { Link, useParams } from "react-router-dom";
export default function Todos() {
  const params = useParams();
  const id = params.id;
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const changeHandler = (event) => [setTodo(event.target.value)];

  const AddTodo = (event) => {
    if (todo.length > 0 && event.keyCode === 13) {
      dispatch(addTodo(todo));
      setTodo("");
    }
  };

  return (
    <div className={style.container}>
      <p className={style.title}>Todo React Redux</p>

      <input
        type="text"
        value={todo}
        onChange={changeHandler}
        placeholder="What needs to be done?"
        onKeyDown={AddTodo}
      />

      <div className={style.todoStatus}>
        <Link
          className={id === "allTodos" ? style.activeId : style.deActiveId}
          to="/filterTodos/allTodos"
        >
          All
        </Link>
        /
        <Link
          className={id === "activeTodos" ? style.activeId : style.deActiveId}
          to="/filterTodos/activeTodos"
        >
          Active
        </Link>
        /
        <Link
          className={
            id === "completedTodos" ? style.activeId : style.deActiveId
          }
          to="/filterTodos/completedTodos"
        >
          Completed
        </Link>
      </div>
    </div>
  );
}
