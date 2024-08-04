const CircuitBreaker = require('opossum');

const circuitBreakerOptions = {
  timeout: 3000,
  errorThresholdPercentage: 50,
  resetTimeout: 30000
};

module.exports = function(asyncFunctionToProtect) {
  return new CircuitBreaker(asyncFunctionToProtect, circuitBreakerOptions);
};