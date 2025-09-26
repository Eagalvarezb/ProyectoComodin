module.exports = app => {
    const curso = require("../controllers/cursos.controller.js");
    const router = require("express").Router();

    router.post("/create/", curso.create);          // Crear
    router.get("/", curso.findAll);          // Listar todos
    router.get("/:id", curso.findOne);       // Buscar por ID
    router.put("/update/:id", curso.update);        // Actualizar
    router.delete("/delete/:id", curso.delete);     // Eliminar todos

    app.use("/api/cursos", router);
};
