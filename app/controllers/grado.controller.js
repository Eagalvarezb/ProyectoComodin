const db = require("../models");
const Grado = db.grados;
const Student = db.students;
const Curso = db.courses;

// Crear grado
exports.create = (req, res) => {
    if (!req.body.studentId || !req.body.courseId || req.body.nota == null || !req.body.tipoEvaluacion) {
        return res.status(400).send({ message: "studentId, courseId, nota y tipoEvaluacion son obligatorios" });
    }

    const nuevoGrado = {
        studentId: req.body.studentId,
        courseId: req.body.courseId,
        nota: req.body.nota,
        tipoEvaluacion: req.body.tipoEvaluacion,
        fecha: req.body.fecha || new Date()
    };

    Grado.create(nuevoGrado)
        .then(data => res.status(201).send(data))
        .catch(err => res.status(500).send({ message: err.message || "Error creando grado" }));
};

// Listar todos los grados
exports.findAll = (req, res) => {
    Grado.findAll({
        include: [
            { model: Student, as: "estudiante", attributes: ["id", "nombre"] },
            { model: Curso, as: "curso", attributes: ["id_curso", "nombre"] }
        ]
    })
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message || "Error listando grados" }));
};

// Buscar por ID
exports.findOne = (req, res) => {
    const id = req.params.id;

    Grado.findByPk(id, {
        include: [
            { model: db.students, as: "estudiante" },
            { model: db.courses, as: "curso" }
        ]
    })
        .then(data => {
            if (!data) return res.status(404).send({ message: "Grado no encontrado" });
            res.send(data);
        })
        .catch(err => res.status(500).send({ message: err.message || `Error buscando grado con id=${id}` }));
};


// Actualizar grado
exports.update = (req, res) => {
    const id = req.params.id;

    const datosActualizados = {
        studentId: req.body.studentId,
        courseId: req.body.courseId,
        nota: req.body.nota,
        tipoEvaluacion: req.body.tipoEvaluacion,
        fecha: req.body.fecha
    };

    Grado.update(datosActualizados, { where: { id } })
        .then(num => {
            if (num == 1) {
                Grado.findByPk(id, {
                    include: [
                        { model: Student, as: "student", attributes: ["id", "nombre"] },
                        { model: Curso, as: "curso", attributes: ["id_curso", "nombre"] }
                    ]
                }).then(data => res.send({ message: "Grado actualizado", data }));
            } else {
                res.status(404).send({ message: `No se encontró grado con id=${id}` });
            }
        })
        .catch(err => res.status(500).send({ message: err.message || `Error actualizando grado con id=${id}` }));
};

// Eliminar grado
exports.delete = (req, res) => {
    const id = req.params.id;

    Grado.destroy({ where: { id } })
        .then(num => {
            if (num == 1) res.send({ message: "Grado eliminado" });
            else res.status(404).send({ message: `No se encontró grado con id=${id}` });
        })
        .catch(err => res.status(500).send({ message: err.message || `Error eliminando grado con id=${id}` }));
};
