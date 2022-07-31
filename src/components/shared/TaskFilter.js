import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Todo from "../Todo";
import Todos from "../Todos";
export default function TaskFilter() {
  const state = useSelector((state) => state.todoState);
  const params = useParams();
  const id = params.id;
  const activeTodos = state.todo.filter((item) => item.check === false);
  const completedTodos = state.todo.filter((item) => item.check === true);

  return (
    <>
      <Todos />
      {id === "allTodos" || id === "/"
        ? state.todo.map((item) => <Todo key={item.id} todoData={item} />)
        : id === "activeTodos"
        ? activeTodos.map((item) => <Todo key={item.id} todoData={item} />)
        : id === "completedTodos"
        ? completedTodos.map((item) => <Todo key={item.id} todoData={item} />)
        : ""}
    </>
  );
}
