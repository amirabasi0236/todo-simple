import Todo from "./Todo";

const Todos = ({ todos }) => {
  return (
    <ul className="list-group mt-3">
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
    </ul>
  );
};

export default Todos;
