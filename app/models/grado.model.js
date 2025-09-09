module.exports = (sequelize, Sequelize) => {
    const Grado = sequelize.define("grado", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        courseId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: "cursos",
                key: "id_curso"
            }
        },
        studentId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: "students",
                key: "id"
            }
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
        // Grado -> Curso
        Grado.belongsTo(models.Cursos, {
            foreignKey: "courseId",
            as: "curso"
        });

        // Grado -> Student
        Grado.belongsTo(models.Student, {
            foreignKey: "studentId",
            as: "student"
        });
    };

    return Grado;
};
