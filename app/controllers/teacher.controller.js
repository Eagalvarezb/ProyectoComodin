const db = require("../models");
const Teacher = db.teachers;
const Curso = db.courses;
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
    if (!req.body.nombre) {
        return res.status(400).json({ message: "El nombre es obligatorio" });
    }
    try {
        const teacher = await Teacher.create(req.body);
        res.status(201).json({ message: "Teacher creado", data: teacher });
    } catch (error) {
        res.status(500).json({ message: "Error creando teacher", error: error.message });
    }
};

exports.findAll = async (req, res) => {
    try {
        const condition = req.query.nombre
            ? { nombre: { [Op.iLike]: `%${req.query.nombre}%` } }
            : {};
        const teachers = await Teacher.findAll({ where: condition, include: [{ model: db.courses, as: "cursos" }] });
        res.json(teachers);
    } catch (error) {
        res.status(500).json({ message: "Error listando teachers", error: error.message });
    }
};

exports.findOne = async (req, res) => {
    try {
        const teacher = await Teacher.findByPk(req.params.id, { include: [{ model: db.courses, as: "cursos" }] });
        if (!teacher) return res.status(404).json({ message: "Teacher no encontrado" });
        res.json(teacher);
    } catch (error) {
        res.status(500).json({ message: "Error buscando teacher", error: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        const [updated] = await Teacher.update(req.body, { where: { id: req.params.id } });
        if (updated) {
            const updatedTeacher = await Teacher.findByPk(req.params.id);
            return res.json({ message: "Teacher actualizado", data: updatedTeacher });
        }
        res.status(404).json({ message: "Teacher no encontrado para actualizar" });
    } catch (error) {
        res.status(500).json({ message: "Error actualizando teacher", error: error.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const deleted = await Teacher.destroy({ where: { id: req.params.id } });
        if (deleted) return res.json({ message: "Teacher eliminado" });
        res.status(404).json({ message: "Teacher no encontrado" });
    } catch (error) {
        res.status(500).json({ message: "Error eliminando teacher", error: error.message });
    }
};

exports.deleteAll = async (req, res) => {
    try {
        const deleted = await Teacher.destroy({ where: {}, truncate: false });
        res.json({ message: `${deleted} teachers eliminados` });
    } catch (error) {
        res.status(500).json({ message: "Error eliminando todos los teachers", error: error.message });
    }
};
