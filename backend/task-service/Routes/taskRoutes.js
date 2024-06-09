const express = require('express');
const Task = require('../Models/Task');
const authMiddleware = require('../Middlewares/middlewares');
const router = express.Router();

router.post('/', authMiddleware, async (req, res) => {
  try {
    const { title, description } = req.body;
    const task = new Task({ title, description, userId: req.userId });
    await task.save();
    res.status(201).send(task);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.get('/', authMiddleware, async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.userId });
    res.send(tasks);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Les autres routes restent inchangées

module.exports = router;