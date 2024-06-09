const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./Routes/taskRoutes');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/tasks', taskRoutes);

mongoose.connect(process.env.MONGODB_URI);

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Task service running on port ${port}`);
});