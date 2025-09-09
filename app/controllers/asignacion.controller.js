const db = require("../models");

const Asignacion = db.asignaciones;
const Student = db.students;
const Course = db.courses;

// Crear una nueva asignacion
exports.create = async (req, res) => {
    try {
        const asignacion = await Asignacion.create(req.body);
        res.status(201).json({ message: "Asignacion creada correctamente", data: asignacion });
    } catch (error) {
        res.status(500).json({ message: "Error creando asignacion", error: error.message });
    }
};

// Listar todas las asignaciones con estudiante y curso
exports.findAll = async (req, res) => {
    try {
        const asignaciones = await Asignacion.findAll({
            include: [
                { model: Student, as: "student", attributes: ["nombre"] },
                { model: Course, as: "course", attributes: ["nombre"] }
            ]
        });
        res.json({data : asignaciones});
    } catch (error) {
        res.status(500).json({ message: "Error listando asignaciones", error: error.message });
    }
};

// Buscar por ID
exports.findOne = async (req, res) => {
    try {
        const asignacion = await Asignacion.findByPk(req.params.id, {
            include: [
                { model: Student, as: "student", attributes: ["nombre"] },
                { model: Course, as: "course", attributes: ["nombre"] }
            ]
        });
        if (!asignacion) return res.status(404).json({ message: "Asignacion no encontrada" });
        res.json(asignacion);
    } catch (error) {
        res.status(500).json({ message: "Error buscando asignacion", error: error.message });
    }
};

// Actualizar asignacion
exports.update = async (req, res) => {
    try {
        const [updated] = await Asignacion.update(req.body, { where: { id: req.params.id } });
        if (updated) {
            const updatedAsignacion = await Asignacion.findByPk(req.params.id);
            return res.json({ message: "Asignacion actualizada correctamente", data: updatedAsignacion });
        }
        res.status(404).json({ message: "Asignacion no encontrada para actualizar" });
    } catch (error) {
        res.status(500).json({ message: "Error actualizando asignacion", error: error.message });
    }
};

// Eliminar asignacion
exports.delete = async (req, res) => {
    try {
        const deleted = await Asignacion.destroy({ where: { id: req.params.id } });
        if (deleted) return res.json({ message: "Asignacion eliminada correctamente" });
        res.status(404).json({ message: "Asignacion no encontrada para eliminar" });
    } catch (error) {
        res.status(500).json({ message: "Error eliminando asignacion", error: error.message });
    }
};
