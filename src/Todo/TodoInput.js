import React, { useContext, useRef } from "react";
import TodoContext from "../context/todo-context";
const TodoInput = () => {
  const todoRef = useRef();
  const todoCtx = useContext(TodoContext);

  const todoSubmitHandler = (e) => {
    e.preventDefault();
    todoCtx.addTodo({ id: Math.random(), todo: todoRef });
    //흑흑 submit하고 다시 빈칸으로 되돌리고 시퍼이이..
    // todoRef.current.value = "";
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <input type="text" placeholder="add item ..." ref={todoRef} />
      <button type="submit">Add</button>
    </form>
  );
};
export default TodoInput;
