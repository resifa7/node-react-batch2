const { PrismaClient } = require("../../generated/prisma");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const prisma = new PrismaClient();

const register = async (req, res) => {
  const { email, name, password } = req.body;

  if (!email || !name || !password) {
    res.json({
      status: "filed",
      message: "data yang di masukkan tidak boleh kosong",
    });
  }

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (user) {
    res.status(409).json({ message: "User already exists" });
  } else {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await prisma.user.create({
        data: {
          email,
          name,
          password : hashedPassword,
        },
      });
      res.status(201).json({
        message: "User registered successfully",
        created: user,
      });
    } catch (err) {
      res.json({
        message: err.message,
      });
    }
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    res.status(401).json({
      message: "Invalid credentials",
    });
    return;
  }

  const accessToken = jwt.sign({ username: user.username, id: user.id },
    process.env.JWT_SECRET
  );
  console.log("JWT_SECRET:", process.env.JWT_SECRET);
  res.json({ accessToken });
};

module.exports = { register, login };
