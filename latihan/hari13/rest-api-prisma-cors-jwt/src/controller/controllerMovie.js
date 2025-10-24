const { PrismaClient } = require("../../generated/prisma");
const prisma = new PrismaClient();

const handleInsertMovie = async (req, res) => {
  try {
    let { title, year, categoryId } = req.body;

    if (!title || !year || !categoryId) {
      res.json({
        message: "data yang dimasukkan salah",
        status: "unsuccess",
      });
      return;
    }

    const movies = await prisma.movies.create({
      data: {
        title,
        year,
        categoryId,
      },
    });
    res.json({
      message: "movie was successfully created",
      status: "succes",
      created: movies,
    });
    // return
  } catch (err) {
    res.json({
      info: "null",
      status: "unsuccess",
      message: err.message,
    });
  }
};

const handleReadMovies = async (req, res) => {
  try {
    const movies = await prisma.movies.findMany({
      include: {
        category: {
          select: {
            name: true,
          },
        },
      },
    });
    res.json({
      message: "Data successfully Fetch",
      status: "successed",
      data: movies,
    });
  } catch (err) {
    res.json({
      info: "failed",
      status: "unsuccess",
      message: err.message,
    });
  }
};

const handleReadMovieById = async (req, res) => {
  const { id } = req.params;
  try {
    const movies = await prisma.movies.findUnique({
      include: {
        category: {
            select: {
              name: true,
            },
        },
      },
      where: {
        id: Number(id),
      },
    });

    res.json({
      message: `${movies ? "Data successfully Fetch" : "id not found"}`,
      status: `${movies ? "successed" : "failed"}`,
      data: movies,
    });
  } catch (err) {
    res.json({
      info: "failed",
      status: "unsuccess",
      message: err.meta.cause,
    });
  }
};

const handleUpdateMovie = async (req, res) => {
  let { title, year, categoryId } = req.body;
  let { id } = req.params;
  if (!title || !year || !categoryId) {
    res.json({
      message: "data yang dimasukkan salah",
      status: "unsuccess",
    });
    return;
  }

// try{
    const updateMovie = await prisma.movies.update({
      where: {
        id: Number(id),
      },
      data: {
        title,
        year,
        categoryId,
      },
    });
    res.json({
      message: "movie was successfully updated",
      status: "succes",
      updated: updateMovie,
    });
//   } catch (err) {
//     res.json({
//       status: "filed",
//       info: "id notfound",
//       message: err,
//     });
//   }
};

const handleDeleteMovie = async (req, res) => {
  try {
    let { id } = req.params;
    const deleteMovie = await prisma.movies.delete({
      where: {
        id: Number(id),
      },
    });
    res.json({
      message: "movie was successfully deleted",
      status: "succes",
      deleted: deleteMovie,
    });
  } catch (err) {
    res.json({
      status: "filed",
      message: err.meta.cause,
    });
  }
};

module.exports = {
  handleInsertMovie,
  handleReadMovies,
  handleUpdateMovie,
  handleDeleteMovie,
  handleReadMovieById,
};
