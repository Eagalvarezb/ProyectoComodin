module.exports = app => {
    const grado = require("../controllers/grado.controller.js");
    const router = require("express").Router();

    router.post("/", grado.create);          // Crear
    router.get("/", grado.findAll);          // Listar todos
    router.get("/:id", grado.findOne);       // Buscar por ID
    router.put("/:id", grado.update);        // Actualizar
    router.delete("/:id", grado.delete);     // Eliminar

    app.use("/api/grados", router);
};
