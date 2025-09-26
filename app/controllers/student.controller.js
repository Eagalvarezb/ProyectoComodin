const db = require("../models");
const Student = db.students;
const Grado = db.grados;
const Curso = db.courses;
const Asignacion = db.asignaciones;
const Teacher = db.teachers;

// Crear estudiante
exports.create = (req, res) => {
    if (!req.body.nombre || !req.body.apellido || !req.body.email) {
        return res.status(400).send({ message: "nombre, apellido y email son obligatorios" });
    }

    const nuevoStudent = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email
    };

    Student.create(nuevoStudent)
        .then(data => res.status(201).send(data))
        .catch(err => res.status(500).send({ message: err.message || "Error creando estudiante" }));
};

// Listar todos los estudiantes con detalles
exports.findAll = (req, res) => {
    Student.findAll({
        attributes: ["id", "nombre", "apellido", "email"],
        include: [
            {
                model: Grado,
                as: "grados",
                attributes: ["id", "nota", "tipoEvaluacion", "fecha"],
                include: [
                    {
                        model: Curso,
                        as: "curso",
                        attributes: ["id_curso", "nombre", "codigo", "modalidad", "credito"],
                        include: [
                            {
                                model: Teacher,
                                as: "teacher",
                                attributes: ["id", "nombre", "email", "especialidad"]
                            }
                        ]
                    }
                ]
            },
            {
                model: Asignacion,
                as: "asignaciones",
                attributes: ["id", "courseId"],
                include: [
                    {
                        model: Curso,
                        as: "course",
                        attributes: ["id_curso", "nombre", "codigo"]
                    }
                ]
            }
        ]
    })
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message || "Error listando estudiantes" }));
};

// Buscar estudiante por ID con detalles
exports.findOne = (req, res) => {
    const id = req.params.id;

    Student.findByPk(id, {
        attributes: ["id", "nombre", "apellido", "email"],
        include: [
            {
                model: Grado,
                as: "grados",
                attributes: ["id", "nota", "tipoEvaluacion", "fecha"],
                include: [
                    {
                        model: Curso,
                        as: "curso",
                        attributes: ["id_curso", "nombre", "codigo", "modalidad", "credito"],
                        include: [
                            {
                                model: Teacher,
                                as: "teacher",
                                attributes: ["id", "nombre", "email", "especialidad"]
                            }
                        ]
                    }
                ]
            },
            {
                model: Asignacion,
                as: "asignaciones",
                attributes: ["id", "courseId"],
                include: [
                    {
                        model: Curso,
                        as: "course",
                        attributes: ["id_curso", "nombre", "codigo"]
                    }
                ]
            }
        ]
    })
    .then(data => {
        if (!data) return res.status(404).send({ message: "Estudiante no encontrado" });
        res.send(data);
    })
    .catch(err => res.status(500).send({ message: err.message || `Error buscando estudiante con id=${id}` }));
};

// Actualizar estudiante
exports.update = (req, res) => {
    const id = req.params.id;

    const datosActualizados = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email
    };

    Student.update(datosActualizados, { where: { id } })
        .then(num => {
            if (num == 1) {
                // Traer estudiante actualizado con detalles completos
                Student.findByPk(id, {
                    attributes: ["id", "nombre", "apellido", "email"],
                    include: [
                        {
                            model: Grado,
                            as: "grados",
                            attributes: ["id", "nota", "tipoEvaluacion", "fecha"],
                            include: [
                                {
                                    model: Curso,
                                    as: "curso",
                                    attributes: ["id_curso", "nombre", "codigo", "modalidad", "credito"],
                                    include: [
                                        {
                                            model: Teacher,
                                            as: "teacher",
                                            attributes: ["id", "nombre", "email", "especialidad"]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            model: Asignacion,
                            as: "asignaciones",
                            attributes: ["id", "courseId"],
                            include: [
                                {
                                    model: Curso,
                                    as: "course",
                                    attributes: ["id_curso", "nombre", "codigo"]
                                }
                            ]
                        }
                    ]
                })
                .then(data => res.send({ message: "Estudiante actualizado", data }))
                .catch(err => res.status(500).send({ message: err.message }));
            } else {
                res.status(404).send({ message: `No se encontró estudiante con id=${id}` });
            }
        })
        .catch(err => res.status(500).send({ message: err.message || `Error actualizando estudiante con id=${id}` }));
};

// Eliminar estudiante
exports.delete = (req, res) => {
    const id = req.params.id;

    Student.destroy({ where: { id } })
        .then(num => {
            if (num == 1) res.send({ message: "Estudiante eliminado" });
            else res.status(404).send({ message: `No se encontró estudiante con id=${id}` });
        })
        .catch(err => res.status(500).send({ message: err.message || `Error eliminando estudiante con id=${id}` }));
};
