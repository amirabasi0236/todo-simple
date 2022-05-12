import Todo from "./Todo";

const Todos = ({ todos, deleteTodo, toggleComplateTodo }) => {
  return (
    <ul className="list-group mt-3">
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleComplateTodo={toggleComplateTodo}
        />
      ))}
    </ul>
  );
};

export default Todos;
