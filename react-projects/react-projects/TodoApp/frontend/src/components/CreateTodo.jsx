import { useState } from "react";
import "./CreateTodo.css";

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTodo = async () => {
    if (!title || !description) {
      alert("Please fill out both fields");
      return;
    }

    try {
      const res = await fetch("http://localhost:3001/todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Todo created successfully!");
        setTitle("");
        setDescription("");
      } else {
        alert(data.msg || "Failed to create todo");
      }
    } catch (err) {
      console.error("Error creating todo:", err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="todo-container">
      <h2>Create a Todo</h2>
      <input
        type="text"
        placeholder="Enter Title"
        className="todo-input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Description"
        className="todo-input"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="todo-button" onClick={handleAddTodo}>
        Add Todo
      </button>
    </div>
  );
};

export default CreateTodo;
