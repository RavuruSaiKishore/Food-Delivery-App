import jwt from "jsonwebtoken";

const authMiddleware = async(req, res, next) =>{
    const { token } = req. headers;
    if(!token){
        return res.json({success:false, message:"Not Authorised Login Again"});
    }

    try{
        const token_decade = jwt.verify( token, process.env.JWT_SECRET);
        req.body.userId = token_decade.id;
        next();
    }
    catch (error){
        console.log(error);
        res.json({success : false, message: "Error"});
    }
}

// import jwt from "jsonwebtoken";

// const authMiddleware = async (req, res, next) => {
//     // Extract the Authorization header
//     const authHeader = req.headers['authorization'];

//     // Check if the token exists
//     if (!authHeader || !authHeader.startsWith('Bearer ')) {
//         return res.status(401).json({ success: false, message: "Not Authorized. Please log in again." });
//     }

//     // Extract the token by removing 'Bearer ' from the authHeader
//     const token = authHeader.split(' ')[1];

//     try {
//         // Verify the token using JWT_SECRET from the environment variables
//         const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        
//         // Add the user ID to the req object for future use
//         req.user = { id: decodedToken.id }; 

//         // Proceed to the next middleware or route handler
//         next();
//     } catch (error) {
//         console.log("JWT Verification Error:", error);

//         // Handle different token errors (invalid, expired, etc.)
//         if (error.name === "TokenExpiredError") {
//             return res.status(401).json({ success: false, message: "Token expired. Please log in again." });
//         }
//         return res.status(403).json({ success: false, message: "Invalid token. Access denied." });
//     }
// };

export default authMiddleware;





