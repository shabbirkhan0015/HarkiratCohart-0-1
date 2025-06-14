const express = require("express");
const mongoose = require("mongoose");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/todos", async (req, res) => {
  console.log("abc");
  const todos = await todo.find({});

  res.send({
    todos,
  });
});

app.post("/todo", async (req, res) => {
  console.log("➡️ Received POST /todo");
  const createPayload = req.body;
  console.log("Payload:", createPayload);

  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    console.log("Validation failed");
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }

  try {
    await todo.create({
      title: createPayload.title,
      description: createPayload.description,
    });
    console.log("Todo created successfully");
    res.json({ msg: "todo created" });
  } catch (err) {
    console.error("Error inserting into DB:", err.message);
    res.status(500).json({ msg: "Server error" });
  }
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  console.log("ID:", updatePayload.id);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }

  try {
    const objectId = new mongoose.Types.ObjectId(updatePayload.id);

    const result = await todo.updateOne(
      { _id: objectId },
      { $set: { completed: true } }
    );

    if (result.modifiedCount === 0) {
      return res
        .status(404)
        .json({ msg: "Todo not found or already completed" });
    }

    res.json({ msg: "Todo marked as completed" });
  } catch (err) {
    console.error("Error updating todo:", err.message);
    res.status(500).json({ msg: "Server error" });
  }
});

app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
