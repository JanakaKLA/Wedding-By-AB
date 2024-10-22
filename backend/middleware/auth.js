import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
    const { token } = req.headers;

    // Check if token is missing
    if (!token) {
        return res.status(401).json({ success: false, message: "Not Authorized. Please log in." });
    }

    try {
        // Verify the token and extract the user information
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);

        // Attach the userId to req.body
        req.body.userId = token_decode.id;

        // Move to the next middleware or route
        next();
    } catch (error) {
        console.log("Token verification error:", error);
        return res.status(401).json({ success: false, message: "Invalid token. Please log in again." });
    }
};

export default authMiddleware;
