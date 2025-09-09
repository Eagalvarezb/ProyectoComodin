const db = require("../models");
const Curso = db.courses;
const Teacher = db.teachers;
const Grado = db.grados;
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
    if (!req.body.nombre || !req.body.teacherId) {
        return res.status(400).json({ message: "Nombre y teacherId son obligatorios" });
    }
    try {
        const curso = await Curso.create(req.body);
        res.status(201).json({ message: "Curso creado", data: curso });
    } catch (error) {
        res.status(500).json({ message: "Error creando curso", error: error.message });
    }
};

exports.findAll = async (req, res) => {
    try {
        const condition = req.query.nombre
            ? { nombre: { [Op.iLike]: `%${req.query.nombre}%` } }
            : {};

        const cursos = await Curso.findAll({
            where: condition,
            include: [
                { model: Teacher, as: "teacher" }
            ]
        });

        res.json(cursos);
    } catch (error) {
        res.status(500).json({ message: "Error listando cursos", error: error.message });
    }
};

exports.findOne = async (req, res) => {
    try {
        const curso = await Curso.findByPk(req.params.id, {
            include: [
                { model: Teacher, as: "teacher" },
                { model: Grado, as: "grados" }
            ]
        });
        if (!curso) return res.status(404).json({ message: "Curso no encontrado" });
        res.json(curso);
    } catch (error) {
        res.status(500).json({ message: "Error buscando curso", error: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        const [updated] = await Curso.update(req.body, { where: { id_curso: req.params.id } });
        if (updated) {
            const updatedCurso = await Curso.findByPk(req.params.id);
            return res.json({ message: "Curso actualizado", data: updatedCurso });
        }
        res.status(404).json({ message: "Curso no encontrado para actualizar" });
    } catch (error) {
        res.status(500).json({ message: "Error actualizando curso", error: error.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const deleted = await Curso.destroy({ where: { id_curso: req.params.id } });
        if (deleted) return res.json({ message: "Curso eliminado" });
        res.status(404).json({ message: "Curso no encontrado" });
    } catch (error) {
        res.status(500).json({ message: "Error eliminando curso", error: error.message });
    }
};

