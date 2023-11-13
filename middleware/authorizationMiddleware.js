const Todo = require('../models/todo');

async function authorizationMiddleware(req, res, next) {
  try {
    const userId = req.userId;
    const todoId = req.params.todoId;

    //console.log('User ID from token:', userId);
    //console.log('Todo ID:', todoId);

    const todo = await Todo.findById(todoId);

    console.log('Todo from DB:', todo);

    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    console.log('Todo User ID:', todo.userId);

    if (String(todo.userId) !== userId) {
      return res.status(403).json({ error: 'You are not authorized to perform this action' });
    }

    next();
  } catch (error) {
    console.log('Error in authorizationMiddleware:', error);
    res.status(500).json({ error: 'Server error' });
  }
}

module.exports = authorizationMiddleware;
