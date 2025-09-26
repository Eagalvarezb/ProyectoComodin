const db = require("../models");

const Asignacion = db.asignaciones;
const Student = db.students;
const Curso = db.courses;

// Crear una nueva asignacion
exports.create = (req, res) => {
    if (!req.body.studentId || !req.body.courseId) {
        return res.status(400).send({ message: "studentId y courseId son obligatorios" });
    }

    const nuevaAsignacion = {
        studentId: req.body.studentId,
        courseId: req.body.courseId
    };

    Asignacion.create(nuevaAsignacion)
        .then(data => res.status(201).send(data))
        .catch(err => res.status(500).send({ message: err.message || "Error creando asignacion" }));
};

// Listar todas las asignaciones con solo id y nombre
exports.findAll = (req, res) => {
    Asignacion.findAll({
        include: [
            { model: Student, as: "student", attributes: ["id", "nombre"] },
            { model: Curso, as: "course", attributes: ["id_curso", "nombre"] }
        ]
    })
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message || "Error listando asignaciones" }));
};

// Buscar por ID
exports.findOne = (req, res) => {
    const id = req.params.id;

    Asignacion.findByPk(id, {
        include: [
            { model: Student, as: "student" },  // trae todos los campos del estudiante
            { model: Curso, as: "course" }      // trae todos los campos del curso
        ]
    })
        .then(data => {
            if (!data) return res.status(404).send({ message: "Asignacion no encontrada" });
            res.send(data);
        })
        .catch(err => res.status(500).send({ message: err.message || `Error buscando asignacion con id=${id}` }));
};

// Actualizar asignacion
exports.update = (req, res) => {
    const id = req.params.id;

    const datosActualizados = {
        studentId: req.body.studentId,
        courseId: req.body.courseId
    };

    Asignacion.update(datosActualizados, { where: { id } })
        .then(num => {
            if (num == 1) {
                Asignacion.findByPk(id, {
                    include: [
                        { model: Student, as: "student", attributes: ["id", "nombre"] },
                        { model: Curso, as: "course", attributes: ["id_curso", "nombre"] }
                    ]
                }).then(data => res.send({ message: "Asignacion actualizada", data }));
            } else {
                res.status(404).send({ message: `No se encontró asignacion con id=${id}` });
            }
        })
        .catch(err => res.status(500).send({ message: err.message || `Error actualizando asignacion con id=${id}` }));
};

// Eliminar asignacion
exports.delete = (req, res) => {
    const id = req.params.id;

    Asignacion.destroy({ where: { id } })
        .then(num => {
            if (num == 1) res.send({ message: "Asignacion eliminada" });
            else res.status(404).send({ message: `No se encontró asignacion con id=${id}` });
        })
        .catch(err => res.status(500).send({ message: err.message || `Error eliminando asignacion con id=${id}` }));
};
