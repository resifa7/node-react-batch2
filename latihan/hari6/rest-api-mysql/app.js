const express = require("express");
const { conn } = require("./src/config/db");
const { router } = require("./src/routes/main");

const app = express();

app.use(express.json()); // untuk JSON
// app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.use((req, res) => {
  res.status(404).json({ message: "404 Not Found" });
});

app.listen(process.env.PORT, () => {
  console.log(`App listening on port http://localhost:${process.env.PORT}`);
});
