import { useRef } from "react";
import Card from "../layout/Card";

const AddTodo = ({ addTodoHandler }) => {
  const todoName__Ref = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();

    const todoName = todoName__Ref.current.value;
    addTodoHandler(todoName);
    todoName__Ref.current.value = "";
  };

  return (
    <Card>
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
