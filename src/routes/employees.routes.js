import { Router } from "express";
import {
  getEmployees,
  createEmployee,
  updateEmployee,
  deteleEmployee,
} from "../controllers/employees.controller.js";

const router = Router();

router.get("/employees", getEmployees);

router.post("/employees", createEmployee);

router.put("/employees", updateEmployee);

router.delete("/employees", deteleEmployee);

export default router;
