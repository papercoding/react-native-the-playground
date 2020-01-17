const todos = require('./todos');
const notifications = require('./notifications');

module.exports = {...todos, ...notifications};
