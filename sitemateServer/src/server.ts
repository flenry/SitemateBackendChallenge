import express from "express";
import bodyParser from "body-parser";
import crudJson from "./routes/crudJson";
import cors from "cors";

const app = express();

app.use(bodyParser.json());

app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use("/", crudJson);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
