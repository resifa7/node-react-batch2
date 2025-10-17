const basicAuth = (req, res, next) => {
  var authHeader = req.headers.authorization

  if(!authHeader){
    var err = "You're not Authorized"
    res.setHeader('WWW-Authentice', 'basic')
    err.status = 401
    return next(err)
  }

  var auth = new Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':')

  var user = auth[0]
  var pass = auth[1] 

  if(user == 'admin123' && pass == 'admin123'){
    next()
  }else{
    var err = "Youre not Authorized"
    res.setHeader('WWW-Authentice', 'basic')
    err.status = 401
    return next(err)
  }
}

module.exports = {basicAuth}