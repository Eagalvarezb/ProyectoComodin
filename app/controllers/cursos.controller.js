 const db = require("../models");
    const Curso = db.curso;
    const Op = db.Sequelize.Op;

 
    exports.create = (req, res) => {
        if (!req.body.nombre) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
            return;
        }

        
    const curso = {
            teacherId: req.body.teacherId,
            nombre: req.body.nombre,
            codigo: req.body.codigo,
            modalidad: req.body.modalidad,
            credito: req.body.credito
        };

        // Save a new Client into the database
        Curso.create(curso)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the curso."
                });
            });
    };

   exports.findAll = (req, res) => {
        const nombre = req.query.nombre;
        var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;

        Curso.findAll({ where: condition })
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving cursos."
                });
            });
    };

    exports.findOne = (req, res) => {
        const id = req.params.id;

        Curso.findByPk(id)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error retrieving Curso with id=" + id
                });
            });
    };

    exports.update = (req, res) => {
        const id = req.params.id;

        Curso.update(req.body, {
            where: { id_curso: id }
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "Curso was updated successfully."
                    });
                } else {
                    res.send({
                        message: `Cannot update curso with id=${id}. Maybe curso was not found or req.body is empty!`
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error updating curso with id=" + id
                });
            });
    };

    exports.delete = (req, res) => {
        const id = req.params.id;
       
        Curso.destroy({
            where: { id_curso: id }
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "Cursp was deleted successfully!"
                    });
                } else {
                    res.send({
                        message: `Cannot delete curso with id=${id}. El curso no fue encontado!`
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "Could not delete curso with id=" + id
                });
            });
    };

    exports.deleteAll = (req, res) => {
        Curso.destroy({
            where: {},
            truncate: false
        })
            .then(nums => {
                res.send({ message: `${nums} curso were deleted successfully!` });
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while removing all cursos."
                });
            });
    };