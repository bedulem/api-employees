import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM companydb.employees");
  res.send(rows);
};

export const getEmployee = async (req, res) => {
  const { id } = req.params;
  const [rows] = await pool.query(
    "SELECT * FROM companydb.employees WHERE employees.id = ?",
    [id]
  );
  if (rows.length <= 0) {
    return res.status(404).json({
      message: "Employee not found",
    });
  }
  res.json(rows[0]);
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

export const deteleEmployee = async (req, res) => {
  const { id } = req.params;
  const [result] = await pool.query(
    "DELETE FROM companydb.employees WHERE employees.id = ?",
    [id]
  );
  if (result.affectedRows <= 0) {
    return res.status(404).json({
      message: "Employee not found",
    });
  }
  res.sendStatus(204);
};
