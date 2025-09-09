const db = require("../models");
const Asignacion = db.asignaciones;
const Student = db.students;
const Course = db.courses;

// Crear asignación
exports.create = async (req, res) => {
  try {
    const asignacion = await Asignacion.create(req.body);
    res.status(201).json({
      mensaje: "Asignación creada exitosamente ",
      data: asignacion
    });
  } catch (error) {
    res.status(500).json({ mensaje: "Error creando asignación 😢", error: error.message });
  }
};

// Listar todas las asignaciones con datos de estudiante y curso
exports.findAll = async (req, res) => {
  try {
    const asignaciones = await Asignacion.findAll({
      include: [
        { model: Student, as: "estudiante", attributes: ["id", "nombre", "email", "carnet"] },
        { model: Course, as: "curso", attributes: ["id", "nombre", "codigo", "semestre"] }
      ]
    });
    res.json(asignaciones);
  } catch (error) {
    res.status(500).json({ mensaje: "Error listando asignaciones", error: error.message });
  }
};

// Buscar una asignación por ID
exports.findOne = async (req, res) => {
  try {
    const asignacion = await Asignacion.findByPk(req.params.id, {
      include: [
        { model: Student, as: "estudiante" },
        { model: Course, as: "curso" }
      ]
    });
    if (!asignacion) return res.status(404).json({ mensaje: "Asignación no encontrada 🔍" });
    res.json(asignacion);
  } catch (error) {
    res.status(500).json({ mensaje: "Error buscando asignación", error: error.message });
  }
};

// Actualizar asignación
exports.update = async (req, res) => {
  try {
    const [updated] = await Asignacion.update(req.body, { where: { id: req.params.id } });
    if (updated) {
      const asignacion = await Asignacion.findByPk(req.params.id);
      return res.json({ mensaje: "Asignación actualizada ✨", data: asignacion });
    }
    res.status(404).json({ mensaje: "Asignación no encontrada para actualizar" });
  } catch (error) {
    res.status(500).json({ mensaje: "Error actualizando asignación", error: error.message });
  }
};

// Eliminar asignación
exports.delete = async (req, res) => {
  try {
    const deleted = await Asignacion.destroy({ where: { id: req.params.id } });
    if (deleted) return res.json({ mensaje: "Asignación eliminada correctamente 🗑️" });
    res.status(404).json({ mensaje: "Asignación no encontrada para eliminar" });
  } catch (error) {
    res.status(500).json({ mensaje: "Error eliminando asignación", error: error.message });
  }
};