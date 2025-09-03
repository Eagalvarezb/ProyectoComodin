 const db = require("../models");
    const Teacher = db.teacher;
    const Op = db.Sequelize.Op;

 
    exports.create = (req, res) => {
        // Validamos que dentro del  request no venga vacio el nombre, de lo contrario returna error
        if (!req.body.nombre) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
            return;
        }

        
    const teacher = {
            nombre: req.body.nombre,
            email: req.body.email,
            telefono: req.body.telefono,
            direccion: req.body.direccion,
            especialidad: req.body.especialidad,
            estado: req.body.estado
        };

        // Save a new Client into the database
        Teacher.create(teacher)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the teacher."
                });
            });
    };

   exports.findAll = (req, res) => {
        const nombre = req.query.nombre;
        var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;

        Teacher.findAll({ where: condition })
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving teacher."
                });
            });
    };

    // Find a single Tutorial with an id
    exports.findOne = (req, res) => {
        const id = req.params.id;

        Teacher.findByPk(id)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error retrieving Teacher with id=" + id
                });
            });
    };

    exports.update = (req, res) => {
        const id = req.params.id;

        Teacher.update(req.body, {
            where: { teacherId: id }
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "Teacher was updated successfully."
                    });
                } else {
                    res.send({
                        message: `Cannot update Teacher with id=${id}. Maybe Teacher was not found or req.body is empty!`
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error updating Teacher with id=" + id
                });
            });
    };

    exports.delete = (req, res) => {
        const id = req.params.id;
        // utilizamos el metodo destroy para eliminar el objeto mandamos la condicionante where id = parametro que recibimos 
        Teacher.destroy({
            where: { teacherId: id }
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "Teacher was deleted successfully!"
                    });
                } else {
                    res.send({
                        message: `Cannot delete teacher with id=${id}. El teacher no fue encontado!`
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "Could not delete teacher with id=" + id
                });
            });
    };

    exports.deleteAll = (req, res) => {
        Teacher.destroy({
            where: {},
            truncate: false
        })
            .then(nums => {
                res.send({ message: `${nums} Teacher were deleted successfully!` });
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while removing all Teachers."
                });
            });
    };
