import express from "express";
import routes from "./src/routes/index.js";

const app = express();

app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3334;

app.listen(PORT, () => {
  console.log(`Microservice running on port ${PORT}`);
});
