import { useEffect, useState } from "react";

const Todo = ({ id }) => {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    if (!id) id = 1;
    const fetchtodo = async () => {
      const res = await fetch(`https://dummyjson.com/todos/${id}`);
      const data = await res.json();
      setTodo(data);
    };
    fetchtodo();
  }, [id]);

  return (
    <div key={todo.id}>
      <p>{todo.todo}</p>
    </div>
  );
};

export default Todo;
