import express from "express";
import cors from "cors";
import router from "./src/routes/main.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json()); // untuk JSON

var corsOptions = {
  origin: process.env.ALLOWED_CORS_URL.split(","),
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use("/api", router);

app.use((req, res) => {
  res.status(404).json({ message: "404 Not Found" });
});

app.listen(process.env.PORT, () => {
  console.log(`App listening on port http://localhost:${process.env.PORT}`);
});
