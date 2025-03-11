const jwt = require('jsonwebtoken');
const User = require('../models/user');

const userExtractor = async (request, response, next) => {
    try {
        const token = request.cookies?.accessToken;
        if (!token) {
            return response.sendStatus(401);
        }

        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const user = await User.findById(decoded.id);
        if (!user) {
            return response.sendStatus(401);
        }

        request.user = user;
        console.log('User:', request.user);
        next();
    } catch (error) {
        console.error(error);
        return response.sendStatus(401);
    }
};

module.exports = { userExtractor };
