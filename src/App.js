import "./App.css";
import TodoInput from "./Todo/TodoInput";
import TodoProvider from "./context/TodoProvider";
import TodoList from "./Todo/TodoList";

function App() {
  return (
    <TodoProvider>
      <h1>TODO LIST</h1>
      <hr></hr>
      <TodoInput />
      <TodoList />
    </TodoProvider>
  );
}

export default App;
