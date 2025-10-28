import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./src/routes/apiRouter.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger-output.json" with { type: "json" };


dotenv.config();

const app = express();

app.use(express.json()); // untuk JSON

var corsOptions = {
  origin: process.env.ALLOWED_CORS_URL.split(","),
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use("/api", router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((req, res) => {
  res.status(404).json({ message: "404 Not Found" });
});

app.listen(process.env.PORT, () => {
  console.log(`App listening on port http://localhost:${process.env.PORT}`);
});
