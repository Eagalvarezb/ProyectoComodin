module.exports = (sequelize, Sequelize) => {
  const Grado = sequelize.define("grado", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    // FK del curso
    courseId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    // FK del estudiante
    studentId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    // Nota numérica
    nota: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    // Tipo de evaluación (parcial, final, tarea, etc.)
    tipoEvaluacion: {
      type: Sequelize.STRING,
      allowNull: false
    },
    // Fecha de la nota (por defecto la fecha actual)
    fecha: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  });

  return Grado;
};