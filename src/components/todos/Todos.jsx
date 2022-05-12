const Todos = ({ todos }) => {
  return (
    <ul className="list-group mt-3">
      {todos.map((todo, index) => (
        <li key={index} className="list-group-item">
          {todo.name}
        </li>
      ))}
    </ul>
  );
};

export default Todos;
