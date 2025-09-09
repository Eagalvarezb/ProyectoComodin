module.exports = app => {
    const curso = require("../controllers/cursos.controller.js");
    const router = require("express").Router();

    router.post("/", curso.create);          // Crear
    router.get("/", curso.findAll);          // Listar todos
    router.get("/:id", curso.findOne);       // Buscar por ID
    router.put("/:id", curso.update);        // Actualizar
    router.delete("/:id", curso.delete);     // Eliminar
    router.delete("/", curso.deleteAll);     // Eliminar todos

    app.use("/api/cursos", router);
};
