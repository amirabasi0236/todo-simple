import { useRef, useState } from "react";
import Card from "../layout/Card";

const AddTodo = ({ addTodoHandler }) => {
  const [error, setError] = useState(null);
  const todoName__Ref = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();

    const todoName = todoName__Ref.current.value;

    if (todoName == "") {
      setError("Todo Name Empty!");
      setTimeout(() => {
        setError(null);
      }, 2000);
    } else {
      addTodoHandler(todoName);
      todoName__Ref.current.value = "";
    }
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
