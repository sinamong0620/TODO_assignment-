import React from "react";

const TodoContext = React.createContext({
  items: [],
  addTodo: (todo) => {},
  removeTodo: (id) => {},
  updateTodo: (todo) => {},
});
export default TodoContext;
