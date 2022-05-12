const Todo = ({ todo, index, deleteTodo, toggleComplateTodo }) => {
  const isComplate = todo.isComplate ? 'complate' : '';

  return (
    <li className={`list-group-item d-flex align-items-center ${isComplate}`}>
      <h6 className="me-auto fw-normal">{todo.name}</h6>
      <div className="d-flex">
        <button
          className="btn btn-danger btn-sm"
          onClick={() => deleteTodo(index)}
        >
          Delete
        </button>
        <button
          className="btn btn-primary mx-2 btn-sm"
          onClick={() => toggleComplateTodo(index)}
        >
          Done
        </button>
      </div>
    </li>
  );
};

export default Todo;
