module.exports = app => {
    const students = require("../controllers/student.controller.js");
    const router = require("express").Router();

    router.post("/create/", students.create);       // Crear
    router.get("/", students.findAll);       // Listar todos
    router.get("/:id", students.findOne);    // Buscar por ID
    router.put("/update/:id", students.update);     // Actualizar
    router.delete("/delete/:id", students.delete);  // Eliminar

    app.use("/api/students", router);
};
