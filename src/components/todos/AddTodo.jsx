import { useRef, useState } from "react";
import Card from "../layout/Card";

const AddTodo = ({ addTodoHandler, todos }) => {
  const [error, setError] = useState(null);
  const todoName__Ref = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();

    const todoName = todoName__Ref.current.value;

    if (formValid(todoName)) {
      addTodoHandler(todoName);
      todoName__Ref.current.value = "";
    }
  };

  const formValid = (todoName) => {
    const isDuplicate = todos.find(
      (todo) => todo.name.trim() === todoName.trim(),
    );

    if (todoName == "") {
      messageError("Todo Name Empty!");
      return false;
    } else if (isDuplicate) {
      messageError("Please Add New Todo Exist Todo!");
      return false;
    }

    return true;
  };

  const messageError = (error) => {
    setError(error);

    setTimeout(() => {
      setError(null);
    }, 2000);
  };

  return (
    <Card>
      {error && <div className="alert alert-danger">{error}</div>}
      <form className="row" onSubmit={submitHandler}>
        <div className="col">
          <input
            className="form-control"
            placeholder="Enter Todo Name"
            type="text"
            ref={todoName__Ref}
          />
        </div>
        <div className="col-2">
          <button className="btn btn-primary w-100">Add Todo</button>
        </div>
      </form>
    </Card>
  );
};

export default AddTodo;
