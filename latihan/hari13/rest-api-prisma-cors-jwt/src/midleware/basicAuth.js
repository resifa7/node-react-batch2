//MIDLEWARE PARAMETER AUTH BASIC
const handleBasicAuthentication = (req, res, next) => {
  let authheader = req.headers.authorization;

  if (!authheader) {
    let err = "You are not authenticated!";
    res.setHeader("WWW-Authenticate", "Basic");
    err.status = 404;
    res.status(404).json({
      message: err,
      status: 404,
    });
    return next(err);
  }

  let auth = new Buffer.from(authheader.split(" ")[1], "base64")
    .toString()
    .split(":");
  let user = auth[0];
  let pass = auth[1];

  console.log(auth);

  if (user == "admin" && pass == "admin") {
    //if authorized user
    next();
  } else {
    let err = "You'r user or password not authenticated!";
    res.setHeader("WWW-Authenticate", "Basic");
    err.status = 404;
    console.log(err);
    res.status(404).json({
      message: err,
      status: 404,
    });
    return next(err);
  }
};

module.exports = { handleBasicAuthentication };
