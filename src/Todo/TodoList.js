import React, { useContext } from "react";
import TodoContext from "../context/todo-context";
import TodoItem from "./TodoItem";
const TodoList = () => {
  const todoCtx = useContext(TodoContext);

  return (
    <ul>
      {todoCtx.items?.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ul>
  );
};
export default TodoList;
