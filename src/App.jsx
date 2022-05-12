import { useState } from "react";
import Template from "./components/layout/Template";
import AddTodo from "./components/todos/AddTodo";

const App = () => {
  const [todos, setTodos] = useState([]) 

  const addTodoHandler = (todoName) => {
    const newTodos = [...todos]
    newTodos.push({todoName,isComplate: false})
    setTodos(newTodos)
  }

  return (
    <Template>
      <AddTodo addTodoHandler={addTodoHandler}/>
    </Template>
  )
}

export default App;