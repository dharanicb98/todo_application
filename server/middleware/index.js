const jwt = require('jsonwebtoken');
const User = require('../models/user');

const authMiddleware = async (req, res, next) => {
  const authHeader = req.header('Authorization');
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).send('Access denied');

  try {
    const decoded = jwt.verify(token, 'your_jwt_secret');
    console.log('Decoded payload:', decoded);

    req.user = await User.findById(decoded._id);
    if (!req.user) return res.status(404).send('User not found');

    next();
  } catch (error) {
    console.error('JWT Verification Error:', error.message);
    res.status(401).send('Invalid token');
  }
};

module.exports = authMiddleware;
