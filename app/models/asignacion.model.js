module.exports = (sequelize, Sequelize) => {
  const Asignacion = sequelize.define("asignacion", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    studentId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    courseId: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  });

  return Asignacion;
};