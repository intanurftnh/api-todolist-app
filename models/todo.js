const mongoose = require('mongoose');
const todoSchema = require('./schema/todoSchema');

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
