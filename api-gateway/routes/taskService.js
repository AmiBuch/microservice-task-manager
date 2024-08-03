const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // Simulating a delay
  setTimeout(() => {
    res.json({ message: 'This will return tasks from Task Service' });
  }, 100);
});

module.exports = router;