const db = require("../models");
const Grado = db.grados;
const Course = db.courses;
const Student = db.students;

// Crear una nueva nota
exports.create = async (req, res) => {
  try {
    const grado = await Grado.create(req.body);
    res.status(201).json({
      mensaje: "Nota registrada correctamente ✅",
      data: grado
    });
  } catch (error) {
    res.status(500).json({ mensaje: "Error creando la nota 😢", error: error.message });
  }
};

// Listar todas las notas (con estudiante y curso asociados)
exports.findAll = async (req, res) => {
  try {
    const grados = await Grado.findAll({
      include: [
        { model: Student, as: "estudiante", attributes: ["id", "nombre", "email", "carnet"] },
        { model: Course, as: "curso", attributes: ["id", "nombre", "codigo", "semestre"] }
      ]
    });
    res.json(grados);
  } catch (error) {
    res.status(500).json({ mensaje: "Error listando las notas", error: error.message });
  }
};

// Buscar una nota por ID
exports.findOne = async (req, res) => {
  try {
    const grado = await Grado.findByPk(req.params.id, {
      include: [
        { model: Student, as: "estudiante" },
        { model: Course, as: "curso" }
      ]
    });
    if (!grado) return res.status(404).json({ mensaje: "Nota no encontrada 🔍" });
    res.json(grado);
  } catch (error) {
    res.status(500).json({ mensaje: "Error buscando nota", error: error.message });
  }
};

// Actualizar una nota
exports.update = async (req, res) => {
  try {
    const [updated] = await Grado.update(req.body, { where: { id: req.params.id } });
    if (updated) {
      const updatedGrado = await Grado.findByPk(req.params.id);
      return res.json({ mensaje: "Nota actualizada con éxito ✨", data: updatedGrado });
    }
    res.status(404).json({ mensaje: "Nota no encontrada para actualizar" });
  } catch (error) {
    res.status(500).json({ mensaje: "Error actualizando nota", error: error.message });
  }
};

// Eliminar una nota
exports.delete = async (req, res) => {
  try {
    const deleted = await Grado.destroy({ where: { id: req.params.id } });
    if (deleted) return res.json({ mensaje: "Nota eliminada correctamente 🗑️" });
    res.status(404).json({ mensaje: "Nota no encontrada para eliminar" });
  } catch (error) {
    res.status(500).json({ mensaje: "Error eliminando nota", error: error.message });
  }
};