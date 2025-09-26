module.exports = app => {
    const teacher = require("../controllers/teacher.controller.js");
    const router = require("express").Router();

    router.post("/create/", teacher.create);         // Crear
    router.get("/", teacher.findAll);         // Listar todos
    router.get("/:id", teacher.findOne);      // Buscar por ID
    router.put("/update/:id", teacher.update);       // Actualizar
    router.delete("/delete/:id", teacher.delete);    

    app.use("/api/teachers", router);
};
