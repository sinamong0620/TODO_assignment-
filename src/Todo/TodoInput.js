import React, { useContext, useState } from "react";
import TodoContext from "../context/todo-context";
const TodoInput = () => {
  const todoCtx = useContext(TodoContext);
  const [todo, setTodo] = useState("");

  const todoSubmitHandler = (e) => {
    e.preventDefault();
    todoCtx.addTodo({ id: Math.random(), todo: todo });
    setTodo("");
  };
  const todoAddHandler = (e) => {
    setTodo(e.target.value);
  };
  return (
    <form onSubmit={todoSubmitHandler}>
      <input
        type="text"
        placeholder="add item ..."
        value={todo}
        onChange={todoAddHandler}
      />
      <button type="submit">Add</button>
    </form>
  );
};
export default TodoInput;
