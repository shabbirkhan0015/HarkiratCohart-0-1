const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://shabbirkhan:Khan@0015@shabbir.uljgqhy.mongodb.net/?retryWrites=true&w=majority&appName=shabbir"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: {
    type: Boolean,
    default: false,
  },
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
