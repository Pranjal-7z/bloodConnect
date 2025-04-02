const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const BlacklistedToken = require('../models/blacklistToken.model'); 

module.exports.authUser = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        const token = req.cookies.token || (authHeader && authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : null);

        if (!token) {
            return res.status(401).json({ message: "Access Denied. No token provided." });
        }

        
        const isBlacklisted = await BlacklistedToken.findOne({ token });
        if (isBlacklisted) {
            return res.status(401).json({ message: "Token is blacklisted. Please log in again." });
        }

        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
       

       
        const user = await User.findById(decoded.userId);
       mongo

        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        req.user = user; 
        next();
    } catch (error) {
        console.error("JWT Verification Error:", error);
        return res.status(401).json({ message: "Invalid Token" });
    }
};
