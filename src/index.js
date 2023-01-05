import express from "express";
import employeesRoutes from "./routes/employees.routes.js";
import inedexRoutes from "./routes/index.routes.js";

const app = express();
const PORT = 3000;

app.use(inedexRoutes);
app.use(employeesRoutes);

app.listen(PORT);

console.log(`Server running on port ${PORT}`);
