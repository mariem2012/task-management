import express from "express";
import bodyParser from "body-parser";
import taskRoutes from "./routes/taskRoutes.js";
const app = express();

app.use(bodyParser.json());

app.use("/api", taskRoutes);

const port = 3004;
app.listen(port, () => {
  console.log(`Server in runing in port ${port}`);
});
