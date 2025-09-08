// student.model.js
// Definicion de la entidad Student (tabla de estudiantes en la BD)

module.exports = (sequelize, Sequelize) => {
  const Student = sequelize.define("student", {
    // ID autoincremental
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    // Nombre del estudiante
    nombre: {
      type: Sequelize.STRING,
      allowNull: false
    },
    // Apellido del estudiante
    apellido: {
      type: Sequelize.STRING,
      allowNull: false
    },
    // Correo electronico (unico en la BD)
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true // valida que sea formato correo
      }
    }
  });

  return Student;
};
