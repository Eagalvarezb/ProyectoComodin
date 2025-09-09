module.exports = (sequelize, Sequelize) => {
    const Cursos = sequelize.define("curso", {
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

    Cursos.associate = (models) => {
        Cursos.belongsTo(models.Teacher, {
            foreignKey: "teacherId",
            as: "teacher"
        });

        Cursos.hasMany(models.Grado, {
            foreignKey: "courseId",
            as: "notas"
        });
    };

    return Cursos;
};
