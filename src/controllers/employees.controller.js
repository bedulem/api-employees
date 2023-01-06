import { pool } from "../db.js";
export const getEmployees = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM companydb.employees");
  res.send(rows);
};

export const createEmployee = async (req, res) => {
  const { name, salary } = req.body;
  const [rows] = await pool.query(
    "INSERT INTO employees (name, salary) VALUES (?,?)",
    [name, salary]
  );
  res.send({
    id: rows.insertId,
    name,
    salary,
  });
};

export const updateEmployee = (req, res) => res.send("actualizando empleados");

export const deteleEmployee = (req, res) => res.send("eliminando empleados");
