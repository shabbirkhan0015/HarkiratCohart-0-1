import "./Todos.css";

const Todos = ({ todos }) => {
  return (
    <div className="todos-container">
      {todos.map((todo) => (
        <div className="todo-card" key={todo.id}>
          <h1 className="todo-title">{todo.title}</h1>
          <h2 className="todo-desc">{todo.description}</h2>
          <button
            className={`todo-btn ${
              todo.completed ? "completed" : "incomplete"
            }`}
          >
            {todo.completed ? "Completed" : "Mark as Complete"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todos;
