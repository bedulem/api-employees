import express from "express";
import employeesRoutes from "./routes/employees.routes.js";
import inedexRoutes from "./routes/index.routes.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(inedexRoutes);
app.use("/api", employeesRoutes);

app.listen(PORT);

console.log(`Server running on port ${PORT}`);
