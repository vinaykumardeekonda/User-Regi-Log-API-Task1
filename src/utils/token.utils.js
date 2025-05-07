require('dotenv').config();
const jwt = require('jsonwebtoken');

exports.generateToken = (payload, expiresIn = '1d') => {
    return jwt.sign(payload, process.env.JWT_TOKEN, { expiresIn });
}

exports.verifyToken = (token) => {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (err) {
        return null;
    }
};