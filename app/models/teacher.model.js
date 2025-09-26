module.exports = (sequelize, Sequelize) => {
    const Teacher = sequelize.define("teacher", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: { type: Sequelize.STRING, allowNull: false },
        email: { type: Sequelize.STRING, allowNull: false, unique: true, validate: { isEmail: true } },
        telefono: { type: Sequelize.STRING },
        direccion: { type: Sequelize.STRING },
        especialidad: { type: Sequelize.STRING },
        estado: { type: Sequelize.BOOLEAN, defaultValue: true }
    });

    Teacher.associate = (models) => {
        Teacher.hasMany(models.Curso, { foreignKey: "teacherId", as: "cursos" });
    };

    return Teacher;
};
