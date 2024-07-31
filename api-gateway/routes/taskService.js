const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'This will return tasks from Task Service' });
});

module.exports = router;