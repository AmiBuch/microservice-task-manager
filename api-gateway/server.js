const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(morgan('combined'));
app.use(express.json());

// Import routes
const userRoutes = require('./routes/userService');
const taskRoutes = require('./routes/taskService');

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API Gateway' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API Gateway running on port ${PORT}`));