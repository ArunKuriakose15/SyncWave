const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {

    const token = req.header("token");
    if (!token) {
        return res.status(401).json({ message: "Access Denied. Invalid Token Format!" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const currentTime = Math.floor(Date.now() / 1000); 
        if (decoded.exp && decoded.exp < currentTime) {
            return res.status(401).json({ message: "Token Expired. Please Login Again." });
        }
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).json({ message: "Invalid Token" });
    }
};

module.exports = verifyToken;
