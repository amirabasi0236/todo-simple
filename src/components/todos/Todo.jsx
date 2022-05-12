const Todo = ({ todo,index,deleteTodo }) => {
  return (
    <li className="list-group-item d-flex align-items-center">
      <h6 className="me-auto fw-normal">{todo.name}</h6>
      <div className="d-flex">
        <button className="btn btn-danger btn-sm" onClick={() => deleteTodo(index)}>Delete</button>
        <button className="btn btn-primary mx-2 btn-sm">Done</button>
      </div>
    </li>
  );
};

export default Todo;
