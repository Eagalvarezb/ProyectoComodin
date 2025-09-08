module.exports = app => {
  const grados = require("../controllers/grado.controller.js");
  const router = require("express").Router();

  // Registrar una nota
  router.post("/", grados.create);

  // Listar todas las notas
  router.get("/", grados.findAll);

  // Buscar nota por ID
  router.get("/:id", grados.findOne);

  // Actualizar nota
  router.put("/:id", grados.update);

  // Eliminar nota
  router.delete("/:id", grados.delete);

  // Ruta base
  app.use("/api/grados", router);
};