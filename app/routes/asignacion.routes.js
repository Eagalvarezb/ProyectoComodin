// Endpoints REST para manejar las asignaciones estudiante-curso

module.exports = app => {
  const asignaciones = require("../controllers/asignacion.controller.js");
  const router = require("express").Router();

  // Crear nueva asignación
  router.post("/", asignaciones.create);

  // Listar todas
  router.get("/", asignaciones.findAll);

  // Buscar por ID
  router.get("/:id", asignaciones.findOne);

  // Actualizar asignación
  router.put("/:id", asignaciones.update);

  // Eliminar asignación
  router.delete("/:id", asignaciones.delete);

  // Conectar al servidor
  app.use("/api/asignaciones", router);
};