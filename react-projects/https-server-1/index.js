const express = require("express");

const app = express();
app.use(express.json());
const port = 3000;
let todos = []; // In-memory store
let idCounter = 1;

app.get("/", (req, res) => {
  res.json(todos);
});

app.post("/", (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ message: "Title is required" });

  const newTodo = {
    id: idCounter++,
    title,
    completed: false,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  const todo = todos.find((t) => t.id === parseInt(id));
  if (!todo) return res.status(404).json({ message: "Todo not found" });

  if (title !== undefined) todo.title = title;
  if (completed !== undefined) todo.completed = completed;

  res.json(todo);
});

// DELETE a todo
app.delete("/:id", (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex((t) => t.id === parseInt(id));
  if (index === -1) return res.status(404).json({ message: "Todo not found" });

  const deleted = todos.splice(index, 1);
  res.json(deleted[0]);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
