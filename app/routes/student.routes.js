// student.routes.js
// Rutas CRUD de estudiantes

module.exports = app => {
  const students = require("../controllers/student.controller.js");
  const router = require("express").Router();

  // Crear nuevo estudiante
  router.post("/", students.create);

  // Listar todos los estudiantes
  router.get("/", students.findAll);

  // Buscar estudiante por ID
  router.get("/:id", students.findOne);

  // Actualizar estudiante
  router.put("/:id", students.update);

  // Eliminar estudiante
  router.delete("/:id", students.delete);

  // Registramos las rutas en Express
  app.use("/api/students", router);
};
