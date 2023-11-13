const express = require('express');
const app = express();
const database = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const todoRoutes = require('./routes/todoRoutes');
const authMiddleware = require('./middleware/authMiddleware');

app.use(express.json());

database.connect();

app.use('/api/auth', authRoutes); // Tidak ada middleware otentikasi pada rute register dan login
app.use('/api/todos', authMiddleware, todoRoutes); // Middleware otentikasi diterapkan di todoRoutes setelah login

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
