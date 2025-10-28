import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const prisma = new PrismaClient();

class AuthController {
  async register(req, res) {
    try {
      const { name, email, password } = req.body;

      const exists = await prisma.users.findUnique({
        where: {
          email: email,
        },
      });

      if (exists) {
        throw { code: 409, message: "Email already registered" };
      }

      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);

      const user = await prisma.users.create({
        data: {
          name,
          email,
          password: hash,
        },
      });

      return res.status(201).json({
        status: true,
        message: "Success to register",
      });
    } catch (error) {
      return res.status(error.code || 500).json({
        status: false,
        message: error.message,
      });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;

      const user = await prisma.users.findUnique({
        where: {
          email: email,
        },
      });

      if (!user) {
        throw { code: 404, message: "Email or Password wrong" };
      }

      const checkPassword = await bcrypt.compare(password, user.password);
      if (!checkPassword) {
        throw { code: 404, message: "Email or Password wrong" };
      }
      const accessToken = jwt.sign(
        { email: user.email, id: user.id },
        process.env.JWT_SECRET
      );

      return res.status(200).json({
        status: true,
        message: "success to login",
        accessToken,
      });
    } catch (error) {
      return res.status(error.code || 500).json({
        status: false,
        message: error.message,
      });
    }
  }
}

export default new AuthController();
