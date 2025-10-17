const jwt = require('jsonwebtoken')

const authJWT = (req, res, next) => {
  const authHeader = req.header('Authorization');

  if(!authHeader){
    var err = "You're not Authorized"
    res.setHeader('WWW-Authentice', 'basic')
    err.status = 401
    return next(err)
  }

  const token = authHeader.split(" ")[1]
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err){
            return res.status(401).json({info: "Unauthorized"});
        }else{
            req.user = user;
            next();
        }
    });
}

module.exports = {authJWT}