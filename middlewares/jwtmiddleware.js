const jwt = require('jsonwebtoken');

const jwtMiddleware = (req, res, next) => {
    console.log("inside middleware");
    // token access
    const token = req.headers['access_token'].split(" ")[1];

    // verify
    try {
        const JWTresponse = jwt.verify(token, 'supersecretkey123');
        console.log(JWTresponse);
        req.payload = JWTresponse._id;
        next();
    } catch (err) {
        res.status(401).json("Authorization failed! Please login");
    }
};

module.exports = jwtMiddleware;