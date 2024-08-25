require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const blogRoutes = require('./routes/blogRoutes');


const PORT=4000
const DB_NAME="merndb"
 const TODO_USER="todo"
 const TODO_PASS="todo1"
 const DATABASE_URL=`mongodb+srv://${TODO_USER}:${TODO_PASS}@merncluster.gssgs.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=mernCluster`

// Initialize the express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies

// Routes
app.use('/api/blogs', blogRoutes);

// Connect to MongoDB
mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(error => console.error('Could not connect to MongoDB:', error.message));
