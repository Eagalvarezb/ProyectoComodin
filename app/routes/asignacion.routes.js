module.exports = app => {
    const asignacion = require("../controllers/asignacion.controller.js");
    const router = require("express").Router();

    router.post("/", asignacion.create);
    router.get("/", asignacion.findAll);
    router.get("/:id", asignacion.findOne);
    router.put("/:id", asignacion.update);
    router.delete("/:id", asignacion.delete);

    app.use("/api/asignaciones", router);
};
