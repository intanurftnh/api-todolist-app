const mongoose = require('mongoose');

const connect = async () => {
  try {
    await mongoose.connect('mongodb+srv://intannurfathonah:INFsic19072004@cluster0.q2xr6j7.mongodb.net/todoDB');
    console.log('Connected to the database');
  } catch (error) {
    console.error('Database connection failed', error);
  }
};

module.exports = { connect };
