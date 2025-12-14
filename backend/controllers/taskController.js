const Task = require("../models/Task");

/* ================= GET ================= */
exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user.id }).sort({ createdAt: -1 });
  res.json(tasks);
};

/* ================= CREATE ================= */
exports.createTask = async (req, res) => {
  const task = await Task.create({
    title: req.body.title,
    user: req.user.id,
  });

  res.status(201).json(task);
};

/* ================= UPDATE ================= */
exports.updateTask = async (req, res) => {
  const task = await Task.findOne({
    _id: req.params.id,
    user: req.user.id,
  });

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  // ✅ Allow updating both title & completed
  if (req.body.title !== undefined) {
    task.title = req.body.title;
  }

  if (req.body.completed !== undefined) {
    task.completed = req.body.completed;
  }

  await task.save();

  res.json(task);
};

/* ================= DELETE ================= */
exports.deleteTask = async (req, res) => {
  const task = await Task.findOneAndDelete({
    _id: req.params.id,
    user: req.user.id,
  });

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json({ message: "Task deleted" });
};
