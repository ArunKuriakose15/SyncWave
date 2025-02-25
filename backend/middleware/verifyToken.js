const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {

    const token = req.header("token");
    if (!token) {
        return res.status(401).json({ message: "Access Denied. Invalid Token Format!" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); 
        req.user = decoded;
        next();
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({ 
                message: "Session Expired. Please Login Again."
            });
        }
        return res.status(403).json({ message: "Invalid Token", error });
    }
};

module.exports = verifyToken;
