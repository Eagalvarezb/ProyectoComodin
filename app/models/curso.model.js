module.exports = (sequelize, Sequelize) => {
    const Curso = sequelize.define("curso", {
        id_curso: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        teacherId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: "teachers",
                key: "id"
            }
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        codigo: {
            type: Sequelize.STRING
        },
        modalidad: {
            type: Sequelize.STRING
        },
        credito: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: { min: 1 }
        }
    });

    Curso.associate = (models) => {
        Curso.belongsTo(models.Teacher, { foreignKey: "teacherId", as: "teacher" });
        Curso.hasMany(models.Grado, { foreignKey: "courseId", as: "notas" });
        Curso.hasMany(models.Asignacion, { foreignKey: "courseId", as: "asignaciones" });
    };

    return Curso;
};
