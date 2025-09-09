const db = require("../models");
const Student = db.students;  // <-- aquí minúscula s
const Grado = db.grados;      // <-- aquí minúscula g
const Curso = db.courses;     // <-- aquí minúscula c

exports.create = async (req, res) => {
    if (!req.body.nombre || !req.body.apellido || !req.body.email) {
        return res.status(400).json({ message: "Nombre, apellido y email son obligatorios" });
    }
    try {
        const student = await Student.create(req.body);
        res.status(201).json({ message: "Estudiante creado", data: student });
    } catch (error) {
        res.status(500).json({ message: "Error creando estudiante", error: error.message });
    }
};

exports.findAll = async (req, res) => {
    try {
        const students = await Student.findAll({
            include: [{ model: Grado, as: "grados", include: [{ model: Curso, as: "curso" }] }]
        });
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: "Error listando estudiantes", error: error.message });
    }
};

exports.findOne = async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id, {
            include: [{ model: Grado, as: "grados", include: [{ model: Curso, as: "curso" }] }]
        });
        if (!student) return res.status(404).json({ message: "Estudiante no encontrado" });
        res.json(student);
    } catch (error) {
        res.status(500).json({ message: "Error buscando estudiante", error: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        const [updated] = await Student.update(req.body, { where: { id: req.params.id } });
        if (updated) {
            const updatedStudent = await Student.findByPk(req.params.id);
            return res.json({ message: "Estudiante actualizado", data: updatedStudent });
        }
        res.status(404).json({ message: "Estudiante no encontrado para actualizar" });
    } catch (error) {
        res.status(500).json({ message: "Error actualizando estudiante", error: error.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const deleted = await Student.destroy({ where: { id: req.params.id } });
        if (deleted) return res.json({ message: "Estudiante eliminado" });
        res.status(404).json({ message: "Estudiante no encontrado" });
    } catch (error) {
        res.status(500).json({ message: "Error eliminando estudiante", error: error.message });
    }
};
