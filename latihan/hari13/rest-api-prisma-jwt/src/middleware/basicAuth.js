const basicAuth = (req, res, next) => {
  try {
    var authHeader = req.headers.authorization;

    if (!authHeader) {
      throw { code: 401, message: "You're not Authorized" };
    }

    var auth = new Buffer.from(authHeader.split(" ")[1], "base64")
      .toString()
      .split(":");

    var user = auth[0];
    var pass = auth[1];

    if (user == "admin123" && pass == "admin123") {
      next();
    } else {
      throw { code: 401, message: "Youre not Authorized" };
    }
  } catch (error) {
    return res.status(error.code || 500).json({
      status: false,
      message: error.message,
    });
  }
};

export default basicAuth;
