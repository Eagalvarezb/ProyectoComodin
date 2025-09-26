const db = require("../models");
const Curso = db.courses;
const Teacher = db.teachers;

// Crear curso
exports.create = (req, res) => {
    if (!req.body.nombre || !req.body.teacherId || !req.body.credito) {
        return res.status(400).send({ message: "Nombre, teacherId y credito son obligatorios" });
    }

    const nuevoCurso = {
        teacherId: req.body.teacherId,
        nombre: req.body.nombre,
        codigo: req.body.codigo,
        modalidad: req.body.modalidad,
        credito: req.body.credito
    };

    Curso.create(nuevoCurso)
        .then(data => res.status(201).send(data))
        .catch(err => res.status(500).send({ message: err.message || "Error creando curso" }));
};

// Listar todos los cursos con solo id + nombre del teacher
exports.findAll = (req, res) => {
    Curso.findAll({
        include: [
            { model: Teacher, as: "teacher", attributes: ["id", "nombre"] }
        ]
    })
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message || "Error listando cursos" }));
};

// Buscar por ID
exports.findOne = (req, res) => {
    const id = req.params.id;

    Curso.findByPk(id, {
        include: [
            { model: db.teachers, as: "teacher" },
            { model: db.grados, as: "grados", include: [{ model: db.students, as: "estudiante" }] },
            { model: db.asignaciones, as: "asignaciones", include: [{ model: db.students, as: "student" }] }
        ]
    })
        .then(data => {
            if (!data) return res.status(404).send({ message: "Curso no encontrado" });
            res.send(data);
        })
        .catch(err => res.status(500).send({ message: err.message || `Error buscando curso con id=${id}` }));
};


// Actualizar curso
exports.update = (req, res) => {
    const id = req.params.id;

    const datosActualizados = {
        teacherId: req.body.teacherId,
        nombre: req.body.nombre,
        codigo: req.body.codigo,
        modalidad: req.body.modalidad,
        credito: req.body.credito
    };

    Curso.update(datosActualizados, { where: { id_curso: id } })
        .then(num => {
            if (num == 1) {
                Curso.findByPk(id, {
                    include: [{ model: Teacher, as: "teacher", attributes: ["id", "nombre"] }]
                }).then(data => res.send({ message: "Curso actualizado", data }));
            } else {
                res.status(404).send({ message: `No se encontró curso con id=${id}` });
            }
        })
        .catch(err => res.status(500).send({ message: err.message || `Error actualizando curso con id=${id}` }));
};

// Eliminar curso
exports.delete = (req, res) => {
    const id = req.params.id;

    Curso.destroy({ where: { id_curso: id } })
        .then(num => {
            if (num == 1) res.send({ message: "Curso eliminado" });
            else res.status(404).send({ message: `No se encontró curso con id=${id}` });
        })
        .catch(err => res.status(500).send({ message: err.message || `Error eliminando curso con id=${id}` }));
};
