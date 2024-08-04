const services = {
    users: 'http://user-service:3001',
    tasks: 'http://task-service:3002',

};
module.exports = {
    getServiceUrl: (serviceName) => services[serviceName] || null,
};