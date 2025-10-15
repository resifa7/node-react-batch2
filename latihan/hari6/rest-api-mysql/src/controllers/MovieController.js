const { conn } = require("../config/db");

let movies = [
  { id: 1, title: "Spider-Man", year: 2002 },
  { id: 2, title: "John Wick", year: 2014 },
  { id: 3, title: "The Avengers", year: 2012 },
  { id: 4, title: "Logan", year: 2017 },
];

const getMovies = (req, res) => {
  let { title } = req.query;
  let result = "";

  result = movies.map((movie) => ({
    id: movie.id,
    title: movie.title,
    year: movie.year,
  }));

  if (title) {
    result = result.find((re) =>
      re.title.toLowerCase().includes(title.toLowerCase())
    );
  }

  return res.json({
    message: "Ini adalah tampilan data movie",
    result,
  });
};

const getMovieById = (req, res) => {
  let { id } = req.params;

  const movie = movies.find((movie) => movie.id === Number(id));

  if (!movie) {
    return res.json({
      message: "Movie not found",
    });
  }

  return res.json({
    movie,
  });
};

const store = (req, res) => {
  let { title, year } = req.body;

  const query = `INSERT INTO movies (title, year, created_at, updated_at) VALUES ('${title}', ${year}, NOW(), NOW())`;

  conn.query(query, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
  });

  return res.status(201).json({
    status: true,
    message: "Success create movie",
  });
};

const movie=(req, res) => {
conn.query("SELECT * FROM movies", (err, data) => {

if (err) {
console.error(err);
return;
}
// rows fetch

res.json(data);
});
}
const movie_by_id=(req, res) => {
  const {id} = req.params;
conn.query(`SELECT * FROM movies WHERE id=${id}`, (err, data) => {

if (err) {
console.error(err);
return;
}
// rows fetch

res.json(data);
});
}

const updateMovie = (req, res) => {
    let {title, year} = req.body
    let {id} = req.params

    let queryText = `UPDATE movies SET title="${title}", year=${year}, updated_at=now() 
                    WHERE id=${id}`

    conn.query(queryText, (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
   
        res.json({message: "Succefully Update", status:"success"});
    });
}

const deleteMovie = (req, res) => {
    let {id} = req.params
    let queryText = `DELETE FROM movies WHERE id=${id}`

   conn.query(queryText, (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
   
        res.json({message: "Succefully Delete", status:"success"});
    });
}

module.exports = {
  getMovies,
  getMovieById,
  store,
  movie,
  movie_by_id,
  updateMovie,
  deleteMovie
};
