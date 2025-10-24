const express = require("express");
require("dotenv").config();
const cors = require("cors");
const SweggerUi = require('swagger-ui-express')
const swaggerDocument = require("./swagger-output.json");

const { login, register } = require("./src/controller/controllerUser");
const { routerCategory } = require("./src/routes/routerCategory");
const { routerMovie } = require("./src/routes/routesMovie");
const app = express();
const port = 3000;

var corsOptions = {
    origin: process.env.CORS_ALLOW_LIST.split(","),
  optionsSuccessStatus: 200,
};


app.use("/api-docs", SweggerUi.serve, SweggerUi.setup(swaggerDocument));

app.use(cors(corsOptions));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Belajar CORS & PRISMA");
});

app.use("/movie", routerMovie)
app.use("/cat", routerCategory)

app.post('/register', register)
app.post('/login', login)

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
