const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'This will return users from User Service' });
});

module.exports = router;