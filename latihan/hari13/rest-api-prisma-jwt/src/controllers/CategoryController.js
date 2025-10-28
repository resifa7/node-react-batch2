import { PrismaClient } from "@prisma/client";
import { isRequired } from "../middleware/validator.js";
const prisma = new PrismaClient();

class CategoryController {
  async index(req, res) {
    try {
      const categories = await prisma.categories.findMany();

      return res.status(200).json({
        status: false,
        message: "Success get all category",
        categories,
      });
    } catch (error) {
      return res.status(error.code || 500).json({
        status: false,
        message: error.message,
      });
    }
  }

  async store(req, res) {
    try {
      const { name } = req.body;

      isRequired(name, "name");

      const category = await prisma.categories.create({
        data: {
          name,
          // userId: req.user.id ?? null,
        },
      });

      return res.status(201).json({
        status: true,
        message: "Success create to create category",
        category,
      });
    } catch (error) {
      return res.status(error.code || 500).json({
        status: false,
        message: error.message,
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      const category = await prisma.categories.findUnique({
        where: {
          id: Number(id),
        },
      });

      if (!category) {
        throw { code: 404, message: "Category not found" };
      }

      return res.status(200).json({
        status: false,
        message: "Success get category",
        category,
      });
    } catch (error) {
      return res.status(error.code || 500).json({
        status: false,
        message: error.message,
      });
    }
  }

  async update(req, res) {
    try {
      const { name } = req.body;
      const { id } = req.params;

      isRequired(name, "name");

      const exists = await prisma.categories.findUnique({
        where: {
          id: Number(id),
        },
      });

      if (!exists) {
        throw { code: 404, message: "Category not found" };
      }

      const category = await prisma.categories.update({
        where: {
          id: Number(id),
        },
        data: {
          name,
        },
      });

      return res.status(200).json({
        status: false,
        message: "Success to update category",
        category,
      });
    } catch (error) {
      return res.status(error.code || 500).json({
        status: false,
        message: error.message,
      });
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;

      const exists = await prisma.categories.findUnique({
        where: {
          id: Number(id),
        },
      });

      if (!exists) {
        throw { code: 404, message: "Category not found" };
      }

      const category = await prisma.categories.delete({
        where: {
          id: Number(id),
        },
      });

      return res.status(200).json({
        status: true,
        message: "Success to delete category",
      });
    } catch (error) {
      return res.status(error.code || 500).json({
        status: false,
        message: error.message,
      });
    }
  }
}

export default new CategoryController();
