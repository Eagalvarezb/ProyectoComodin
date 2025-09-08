// student.controller.js
// Aqui escribimos la logica CRUD para los estudiantes

const db = require("../models");
const Student = db.students; // Usamos db.students porque asi lo definimos en index.js

// Crear un nuevo estudiante
exports.create = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json({
      message: "Estudiante creado exitosamente 🚀",
      data: student
    });
  } catch (error) {
    res.status(500).json({ message: "Error creando estudiante 😢", error: error.message });
  }
};

// Listar todos los estudiantes
exports.findAll = async (req, res) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: "Error listando estudiantes", error: error.message });
  }
};

// Buscar estudiante por ID
exports.findOne = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (!student) {
      return res.status(404).json({ message: "Estudiante no encontrado" });
    }
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: "Error buscando estudiante", error: error.message });
  }
};

// Actualizar estudiante por ID
exports.update = async (req, res) => {
  try {
    const [updated] = await Student.update(req.body, { where: { id: req.params.id } });
    if (updated) {
      const updatedStudent = await Student.findByPk(req.params.id);
      return res.json({
        message: "Estudiante actualizado correctamente ✨",
        data: updatedStudent
      });
    }
    res.status(404).json({ message: "Estudiante no encontrado" });
  } catch (error) {
    res.status(500).json({ message: "Error actualizando estudiante", error: error.message });
  }
};

// Eliminar estudiante
exports.delete = async (req, res) => {
  try {
    const deleted = await Student.destroy({ where: { id: req.params.id } });
    if (deleted) {
      return res.json({ message: "Estudiante eliminado exitosamente 🗑️" });
    }
    res.status(404).json({ message: "Estudiante no encontrado" });
  } catch (error) {
    res.status(500).json({ message: "Error eliminando estudiante", error: error.message });
  }
};
