const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

function authMiddleware(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const tokenParts = token.split(' ');
  if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
    return res.status(401).json({ error: 'Invalid token format' });
  }

  const tokenValue = tokenParts[1]; 
  
  //console.log('Received token:', token); // Tambahkan log ini
  //console.log('Secret Key:', authConfig.secret);
  jwt.verify(tokenValue, authConfig.secret, (err, decoded) => {
    if (err) {
      console.log('Verification error:', err); // Dan log ini
      return res.status(401).json({ error: 'Failed to authenticate token' });
    }
    req.userId = decoded.id;
    next();
  });
}

module.exports = authMiddleware;
