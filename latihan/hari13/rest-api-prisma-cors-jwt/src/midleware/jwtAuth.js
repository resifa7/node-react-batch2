const jwt = require('jsonwebtoken')

const handleJWTauth = (req, res, next) => {
  const authHeader = req.header("Authorization");
//   const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ info: "Unauthorized" });

  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(401).json({ info: "Unauthorized" });
    req.user = user;
    next();
  });
};

module.exports = { handleJWTauth };
