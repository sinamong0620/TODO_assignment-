import React, { useContext, useState, useRef } from "react";
import TodoContext from "../context/todo-context";

const TodoItem = ({ item }) => {
  const updateRef = useRef();
  const todoCtx = useContext(TodoContext);

  const [update, setUpdate] = useState(false);
  const deleteHandler = () => {
    todoCtx.removeTodo({ id: item.id });
  };
  const updateHandler = () => {
    setUpdate((p) => !p);
  };
  const confirmHandler = () => {
    setUpdate((p) => !p);
    todoCtx.updateTodo({ id: item.id, todo: updateRef });
  };
  return (
    <li>
      {!update && item.value}
      {update && <input type="text" ref={updateRef} />}
      {!update && <button onClick={deleteHandler}>Delete</button>}
      {!update && <button onClick={updateHandler}>Edit</button>}
      {update && <button onClick={confirmHandler}>확인</button>}
    </li>
  );
};
export default TodoItem;
