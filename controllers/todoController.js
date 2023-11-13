const Todo = require('../models/todo');

async function createTodo(req, res) {
  try {
    const { title, description } = req.body;
    const userId = req.userId;
    
    const newTodo = new Todo({ title, description, userId });

    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Error creating todo' });
  }
}

async function getAllTodos(req, res) {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}

async function getTodoById(req, res) {
  try {
    const todoId = req.params.todoId;
    const todo = await Todo.findById(todoId);
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.status(200).json(todo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
}

async function updateTodo(req, res) {
  const todoId = req.params.todoId;
  const updateData = req.body;
  try {
    const todo = await Todo.findOneAndUpdate({ _id: todoId }, updateData, { new: true });
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.status(200).json(todo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
}

async function deleteTodo(req, res) {
  const todoId = req.params.todoId;
  try {
    const todo = await Todo.findByIdAndDelete(todoId);
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.status(200).json({ message: 'Todo deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
}

async function deleteAllTodos(req, res) {
  try {
    const deletedTodos = await Todo.deleteMany({});
    //console.log('Deleted Todos:', deletedTodos);
    if (deletedTodos.deletedCount === 0) {
      return res.status(404).json({ error: 'No todos found' });
    }
    res.status(200).json({ message: 'All todos deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
}

module.exports = {
  createTodo,
  getAllTodos,
  getTodoById,
  updateTodo,
  deleteTodo,
  deleteAllTodos
};
