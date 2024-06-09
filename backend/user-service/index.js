const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./Route/userRoutes');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/users', userRoutes);

mongoose.connect(process.env.MONGODB_URI);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`User service running on port ${port}`);
});