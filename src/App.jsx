import { useState } from "react";
import Template from "./components/layout/Template";
import AddTodo from "./components/todos/AddTodo";
import Todos from "./components/todos/Todos";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (todoName) => {
    const newTodos = [...todos];
    newTodos.push({ name: todoName, isComplate: false });
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <Template>
      <AddTodo addTodoHandler={addTodoHandler} />
      <Todos todos={todos} deleteTodo={deleteTodo} />
    </Template>
  );
};

export default App;
