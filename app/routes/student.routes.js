module.exports = app => {
    const students = require("../controllers/student.controller.js");
    const router = require("express").Router();

    router.post("/", students.create);       // Crear
    router.get("/", students.findAll);       // Listar todos
    router.get("/:id", students.findOne);    // Buscar por ID
    router.put("/:id", students.update);     // Actualizar
    router.delete("/:id", students.delete);  // Eliminar

    app.use("/api/students", router);
};
