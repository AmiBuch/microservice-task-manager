module.exports = function(err, req, res, next) {
    console.error(err.stack);
  
    if (err.name === 'CircuitBreakerOpenError') {
      return res.status(503).json({ error: 'Service temporarily unavailable' });
    }
  
    res.status(500).json({
      error: {
        message: 'An unexpected error occurred',
        details: process.env.NODE_ENV === 'development' ? err.message : undefined
      }
    });
  };