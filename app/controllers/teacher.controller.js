const db = require("../models");
const Teacher = db.teachers;
const Course = db.courses;
const Grado = db.grados;
const Student = db.students;

// Crear teacher
exports.create = (req, res) => {
    if (!req.body.nombre || !req.body.email) {
        return res.status(400).send({ message: "nombre y email son obligatorios" });
    }

    const nuevoTeacher = {
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono || "",
        direccion: req.body.direccion || "",
        especialidad: req.body.especialidad || "",
        estado: req.body.estado !== undefined ? req.body.estado : true
    };

    Teacher.create(nuevoTeacher)
        .then(data => res.status(201).send(data))
        .catch(err => res.status(500).send({ message: err.message || "Error creando teacher" }));
};

// Listar todos los teachers con cursos y notas
exports.findAll = (req, res) => {
    Teacher.findAll({
        attributes: ["id", "nombre", "email", "telefono", "direccion", "especialidad", "estado"],
        include: [
            {
                model: Course,
                as: "cursos", // alias de Teacher.hasMany(courses)
                attributes: ["id_curso", "nombre", "codigo", "modalidad", "credito"],
                include: [
                    {
                        model: Grado,
                        as: "grados", // alias de Course.hasMany(grados)
                        attributes: ["id", "nota", "tipoEvaluacion", "fecha"],
                        include: [
                            {
                                model: Student,
                                as: "estudiante", // alias de Grado.belongsTo(Student)
                                attributes: ["id", "nombre", "apellido", "email"]
                            }
                        ]
                    }
                ]
            }
        ]
    })
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message || "Error listando teachers" }));
};

// Buscar teacher por ID con cursos y notas
exports.findOne = (req, res) => {
    const id = req.params.id;

    Teacher.findByPk(id, {
        attributes: ["id", "nombre", "email", "telefono", "direccion", "especialidad", "estado"],
        include: [
            {
                model: Course,
                as: "cursos",
                attributes: ["id_curso", "nombre", "codigo", "modalidad", "credito"],
                include: [
                    {
                        model: Grado,
                        as: "grados",
                        attributes: ["id", "nota", "tipoEvaluacion", "fecha"],
                        include: [
                            {
                                model: Student,
                                as: "estudiante",
                                attributes: ["id", "nombre", "apellido", "email"]
                            }
                        ]
                    }
                ]
            }
        ]
    })
    .then(data => {
        if (!data) return res.status(404).send({ message: "Teacher no encontrado" });
        res.send(data);
    })
    .catch(err => res.status(500).send({ message: err.message || `Error buscando teacher con id=${id}` }));
};

// Actualizar teacher
exports.update = (req, res) => {
    const id = req.params.id;

    const datosActualizados = {
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        direccion: req.body.direccion,
        especialidad: req.body.especialidad,
        estado: req.body.estado
    };

    Teacher.update(datosActualizados, { where: { id } })
        .then(num => {
            if (num == 1) {
                // Traer teacher actualizado con todos los cursos y notas
                Teacher.findByPk(id, {
                    attributes: ["id", "nombre", "email", "telefono", "direccion", "especialidad", "estado"],
                    include: [
                        {
                            model: Course,
                            as: "cursos",
                            attributes: ["id_curso", "nombre", "codigo", "modalidad", "credito"],
                            include: [
                                {
                                    model: Grado,
                                    as: "grados",
                                    attributes: ["id", "nota", "tipoEvaluacion", "fecha"],
                                    include: [
                                        {
                                            model: Student,
                                            as: "estudiante",
                                            attributes: ["id", "nombre", "apellido", "email"]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                })
                .then(data => res.send({ message: "Teacher actualizado", data }))
                .catch(err => res.status(500).send({ message: err.message }));
            } else {
                res.status(404).send({ message: `No se encontró teacher con id=${id}` });
            }
        })
        .catch(err => res.status(500).send({ message: err.message || `Error actualizando teacher con id=${id}` }));
};

// Eliminar teacher
exports.delete = (req, res) => {
    const id = req.params.id;

    Teacher.destroy({ where: { id } })
        .then(num => {
            if (num == 1) res.send({ message: "Teacher eliminado" });
            else res.status(404).send({ message: `No se encontró teacher con id=${id}` });
        })
        .catch(err => res.status(500).send({ message: err.message || `Error eliminando teacher con id=${id}` }));
};
