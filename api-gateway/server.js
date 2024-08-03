const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const userRoutes = require('./routes/userService');
const taskRoutes = require('./routes/taskService');
const rateLimit = require('express-rate-limit');
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 100, checkPeriod: 120});

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a'});

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(morgan('combined'));
app.use(express.json());
app.use(morgan('combined', { stream: accessLogStream}));
// Import routes


const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100
});




// Middleware for caching

const cacheMiddleware = (duration) => (req, res, next) => {
  if (req.method !== 'GET') {
    return next();

  }
  const key = req.originalUrl;
  const cachedResponse = cache.get(key);
  if (cachedResponse) {
    res.send(cachedResponse);
  } else {
    res.originalJson = res.json;
    res.json = (body) => {
      res.originalJson(body);
      cache.set(key, body, duration);
    };
    next();
  }
}
// Use routes
app.use('/api/users', userRoutes);
app.use(limiter);
app.use('/api/tasks', cacheMiddleware(300), taskRoutes);
// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API Gateway' });
});
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: {
      message: 'An unexpected error occurred',
      details: process.env.NODE_ENV === 'development' ? err.message : undefined
    }
  });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API Gateway running on port ${PORT}`));