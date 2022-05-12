import { useRef } from "react";

const AddTodo = () => {
  const todoName__Ref = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();

    const todoName = todoName__Ref.current.value

    //Add Todo Function

    console.log(todoName)
    todoName__Ref.current.value = '';
  }

  return (
    <form className="row" onSubmit={submitHandler}>
      <div className="col">
        <input className="form-control" placeholder="Enter Todo Name" type="text" ref={todoName__Ref} />
      </div>
      <div className="col-2">
        <button className="btn btn-primary w-100">Add Todo</button>
      </div>
    </form>
  );
};

export default AddTodo;