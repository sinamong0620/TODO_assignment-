import React, { useReducer } from "react";
import TodoContext from "./todo-context";

const todoinitial = {
  items: [],
};
const todoaction = (state, action) => {
  if (action.type === "ADD") {
    const newTodo = {
      id: action.todo.id,
      value: action.todo.todo,
    };

    if (newTodo.value !== "") {
      return {
        items: [...state.items, newTodo],
      };
    } else {
      //빈칸일 경우
      return { items: [...state.items] };
    }
  }
  if (action.type === "DELETE") {
    const deleteIndex = action.id;
    const updatedTodoArray = state.items.filter(
      (item) => item.id !== deleteIndex.id
    );

    return { items: [...updatedTodoArray] };
  }
  if (action.type === "UPDATE") {
    // console.log(action.todo.id);
    // console.log(action.todo.todo);
    const updateIndex = state.items.findIndex(
      (item) => item.id === action.todo.id
    );
    state.items[updateIndex].value = action.todo.todo;

    return { items: [...state.items] };
  }
  return { items: [...state.items] };
  //하하 무조건 return해줘야 undefined라고 안뜨는구먼
};

const TodoProvider = (props) => {
  //usereduece 의 값을 이용해서 usecontext값을 초기화하기

  //todoreducer 값
  const [todo, dispatchTodo] = useReducer(todoaction, todoinitial);
  const todoAddHandler = (todo) => {
    dispatchTodo({ type: "ADD", todo: todo });
  };
  const removeHandler = (id) => {
    dispatchTodo({ type: "DELETE", id: id });
  };
  const updateHandler = (todo) => {
    dispatchTodo({ type: "UPDATE", todo: todo });
  };
  const todoItem = {
    items: todo.items,
    addTodo: todoAddHandler,
    removeTodo: removeHandler,
    updateTodo: updateHandler,
  };

  return (
    <TodoContext.Provider value={todoItem}>
      {props.children}
    </TodoContext.Provider>
  );
};
export default TodoProvider;
