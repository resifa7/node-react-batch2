const express = require("express");

const app = express();
const port = 3000;

let movies = [
  { id: 1, title: "Spider-Man", year: 2002 },
  { id: 2, title: "John Wick", year: 2014 },
  { id: 3, title: "The Avengers", year: 2012 },
  { id: 4, title: "Logan", year: 2017 },
];

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/peserta/:name", (req, res) => {
  res.send(`Halo Selamat Datang ${req.params.name}`);
});

const getMovies = (req, res) => {
  let result = "";

  result = movies.map((movie) => ({
    title: movie.title,
    year: movie.year,
  }));

  res.json({
    message: "Ini adalah tampilan data movie",
    result,
  });
};

app.get("/movie", getMovies);

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});