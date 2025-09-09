const db = require("../models");
const Grado = db.grados;
const Student = db.students;
const Curso = db.courses;

exports.create = async (req, res) => {
    try {
        const grado = await Grado.create(req.body);
        res.status(201).json({ message: "Nota registrada", data: grado });
    } catch (error) {
        res.status(500).json({ message: "Error creando nota", error: error.message });
    }
};

exports.findAll = async (req, res) => {
    try {
        const grados = await Grado.findAll({
            include: [
                { model: Student, as: "estudiante", attributes: ["id", "nombre", "apellido", "email"] },
                { model: Curso, as: "curso", attributes: ["id_curso", "nombre", "codigo"] }
            ]
        });
        res.json(grados);
    } catch (error) {
        res.status(500).json({ message: "Error listando notas", error: error.message });
    }
};

exports.findOne = async (req, res) => {
    try {
        const grado = await Grado.findByPk(req.params.id, {
            include: [
                { model: Student, as: "estudiante" },
                { model: Curso, as: "curso" }
            ]
        });
        if (!grado) return res.status(404).json({ message: "Nota no encontrada" });
        res.json(grado);
    } catch (error) {
        res.status(500).json({ message: "Error buscando nota", error: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        const [updated] = await Grado.update(req.body, { where: { id: req.params.id } });
        if (updated) {
            const updatedGrado = await Grado.findByPk(req.params.id);
            return res.json({ message: "Nota actualizada", data: updatedGrado });
        }
        res.status(404).json({ message: "Nota no encontrada para actualizar" });
    } catch (error) {
        res.status(500).json({ message: "Error actualizando nota", error: error.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const deleted = await Grado.destroy({ where: { id: req.params.id } });
        if (deleted) return res.json({ message: "Nota eliminada" });
        res.status(404).json({ message: "Nota no encontrada" });
    } catch (error) {
        res.status(500).json({ message: "Error eliminando nota", error: error.message });
    }
};
