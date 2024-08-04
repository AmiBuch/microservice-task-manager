const Joi = require('joi');

const schemas = {
  '/api/users': Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required()
  }),
  '/api/tasks': Joi.object({
    title: Joi.string().required(),
    description: Joi.string()
  })
};

module.exports = function(req, res, next) {
  const schema = schemas[req.path];
  if (schema) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
  }
  next();
};