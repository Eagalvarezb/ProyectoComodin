module.exports = (sequelize, Sequelize) => {
    const Grado = sequelize.define("grado", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        studentId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: { model: "students", key: "id" }
        },
        courseId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: { model: "cursos", key: "id_curso" }
        },
        nota: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        tipoEvaluacion: {
            type: Sequelize.STRING,
            allowNull: false
        },
        fecha: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    });

    Grado.associate = (models) => {
        Grado.belongsTo(models.Student, { foreignKey: "studentId", as: "estudiante" });
        Grado.belongsTo(models.Curso, { foreignKey: "courseId", as: "curso" });
    };

    return Grado;
};
