import React, { useContext, useState, useRef } from "react";
import TodoContext from "../context/todo-context";

const TodoItem = ({ item }) => {
  const updateRef = useRef();
  const todoCtx = useContext(TodoContext);

  const [updateTodo, setUpdateTodo] = useState(item.value);
  const [update, setUpdate] = useState(false);

  const deleteHandler = () => {
    todoCtx.removeTodo({ id: item.id });
  };
  const updateHandler = () => {
    setUpdate((p) => !p);
  };
  const confirmHandler = () => {
    todoCtx.updateTodo({ id: item.id, todo: updateTodo });
    //useRef 값 넘겨줄때는 current하기 ㅎㅎ...
    setUpdate((p) => !p);
  };
  const updateTodoHandler = (e) => {
    setUpdateTodo(e.target.value);
  };
  return (
    <li>
      {!update && item.value}
      {update && (
        <input type="text" value={updateTodo} onChange={updateTodoHandler} />
      )}
      {!update && <button onClick={deleteHandler}>Delete</button>}
      {!update && <button onClick={updateHandler}>Edit</button>}
      {update && <button onClick={confirmHandler}>확인</button>}
    </li>
  );
};
export default TodoItem;
