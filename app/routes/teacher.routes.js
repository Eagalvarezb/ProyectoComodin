module.exports = app => {
    
    const teacher = require("../controllers/teacher.controller.js");
    var router = require("express").Router();

    router.post("/create", teacher.create);
   
    router.get("/", teacher.findAll);
   
    router.get("/:id", teacher.findOne);
 
    router.put("/update/:id", teacher.update);
 
    router.delete("/delete/:id", teacher.delete);
   
    router.delete("/delete/", teacher.deleteAll);
   
    app.use("/api/teacher", router);
};