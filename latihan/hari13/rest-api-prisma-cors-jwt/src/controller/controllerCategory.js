const { PrismaClient } = require("../../generated/prisma");
const prisma = new PrismaClient();

const handleInsertCategory = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.json({
      status: "filed",
      message: "data yang dimasukkan salah",
    });
    return;
  }

  try {
    const catergory = await prisma.category.create({
      data: {
        name,
      },
    });
    res.json({
      status: " success",
      message: "category was successfully created",
      created: catergory,
    });
  } catch (err) {
    res.json({
      info: "null",
      status: "filed",
      message: err.meta.cause,
    });
  }
};

const handleReadCategory = async (req, res) => {
  try {
    const category = await prisma.category.findMany();
    res.json({
      message: "successed get data",
      data: category,
    });
  } catch (err) {
    res.json({
      status: "filed",
      message: err.message,
    });
  }
};

const handleReadCategoryByName = async (req, res) => {
  const { name } = req.body;
  if (!name){
    res.json({
        staus:"filed",
        message:"data yang dimasukkan salah"
    })
    return
  }
  try {
    const category = await prisma.category.findMany({
      where: {
        name: {
          contains: name,
        },
      },
      orderBy: {
        name: "asc",
      },
    });
    res.json({
      status: "success",
      data: category,
    });
  } catch (err) {
    res.json({
      status: "filed",
      message: err.message,
    });
  }
};

const handleUpdateCategory = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name) {
    res.json({
      staus: "filed",
      message: "data yang di masukkansalah",
    });
    return;
  }

  try {
    const category = await prisma.category.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
      },
    });
    res.json({
      status: "success",
      message: "category was successfully updated",
      updated: category,
    });
  } catch (err) {
    res.json({
      status: "filed",
      message: err.meta.cause,
    });
  }
};

const handleDeleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    category = await prisma.category.delete({
      where: {
        id: Number(id),
      },
    });
    res.json({
      status: "success",
      message: "category was sucessfully deleted",
      deleted: category,
    });
  } catch (err) {
    res.json({
      status: "filed",
      message: err.meta.cause,
    });
  }
};

module.exports = {
  handleInsertCategory,
  handleReadCategory,
  handleUpdateCategory,
  handleDeleteCategory,
  handleReadCategoryByName,
};
