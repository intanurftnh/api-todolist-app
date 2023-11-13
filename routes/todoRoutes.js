const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');
const authMiddleware = require('../middleware/authMiddleware');
const authorizationMiddleware = require('../middleware/authorizationMiddleware');

router.use(authMiddleware);

// Create Task
router.post('/', todoController.createTodo);

// Get All Task
router.get('/', todoController.getAllTodos);

// Get Task By Id
router.get('/:todoId', todoController.getTodoById);

// Update Task By Id
router.put('/:todoId', authorizationMiddleware, todoController.updateTodo);

// Delete Task By Id
router.delete('/:todoId', authorizationMiddleware, todoController.deleteTodo);

// Delete All Task
router.delete('/', todoController.deleteAllTodos);

module.exports = router;
