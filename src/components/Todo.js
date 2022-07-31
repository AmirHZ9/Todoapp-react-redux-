import React from 'react'
import {removeTodo ,EditTodo,checkTodo} from "../redux/Todo/todoAction";
import style from '../style/todo.module.css'
import { useDispatch } from 'react-redux';

export default function Todo({todoData}) {

const dispatch =useDispatch()
const {check,todo,editTodo} =todoData

  return (
        <div className={`${check ? style.checkTodo : style.oncheckTodo} ${style.container}` }>

        <button className={style.todosBtn} onClick={() => dispatch(checkTodo(todoData))}><i className="bi bi-check2"></i></button>
        <p className={`${editTodo ?  style.enableEdit : style.disableEdit} ${style.todoText}`} contentEditable={editTodo} suppressContentEditableWarning={true} >{todo}</p>
        {editTodo === false && <button className={style.todosBtn} onClick={() => dispatch(EditTodo(todoData))}><i className="bi bi-pencil"></i></button>}
        {editTodo  && <button className={style.todosBtn} onClick={() => dispatch(EditTodo(todoData))}><i className="bi bi-check2"></i></button>}
        <button className={style.todosBtn} onClick={() => dispatch(removeTodo(todoData))}><i className="bi bi-trash"></i></button>
            
        </div>


  )
}



















