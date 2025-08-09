import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Fetch todos on component mount
    const fetchTodos = async () => {
      try {
        const res = await fetch("http://localhost:3001/todos");
        const data = await res.json();
        setTodos(data.todos); // assuming API returns { todos: [...] }
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      }
    };

    fetchTodos();
  }, []);

  return (
    <>
      <div>
        <CreateTodo />
        <Todos todos={todos} />
      </div>
    </>
  );
}

export default App;
