module.exports = app => {
    const teacher = require("../controllers/teacher.controller.js");
    const router = require("express").Router();

    router.post("/", teacher.create);         // Crear
    router.get("/", teacher.findAll);         // Listar todos
    router.get("/:id", teacher.findOne);      // Buscar por ID
    router.put("/:id", teacher.update);       // Actualizar
    router.delete("/:id", teacher.delete);    // Eliminar
    router.delete("/", teacher.deleteAll);    // Eliminar todos

    app.use("/api/teachers", router);
};
