const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

function register(req, res) {
  const { username, email, password } = req.body;
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({ error: 'Error in password hashing' });
    }
    const newUser = new User({ username, email, password: hash });
    newUser.save()
      .then(user => {
        user.password = undefined;
        res.status(201).json(user);
      })
      .catch(err => {
        res.status(400).json({ error: 'Error creating user' });
      });
  });
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const result = await bcrypt.compare(password, user.password);
    if (!result) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    const token = jwt.sign({ id: user._id }, authConfig.secret, { expiresIn: authConfig.expiresIn });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}

module.exports = {
  register,
  login
};
