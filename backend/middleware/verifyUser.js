const jwt = require("jsonwebtoken");

const verifyUser = (req, res, next) => {
    const token = req.header("token");
    if (!token) {
        return res.status(401).json({ message: "Access Denied. No Token Provided!" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (decoded.role !== "user") {
            return res.status(403).json({ message: "Access Denied. Users Only!" });
        }

        req.user = decoded; // Attach decoded user info
        next();
    } catch (error) {
        return res.status(403).json({ message: "Invalid Token" });
    }
};

module.exports = verifyUser;
