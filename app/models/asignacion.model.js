module.exports = (sequelize, Sequelize) => {
    const Asignacion = sequelize.define("asignacion", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        studentId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: "students",
                key: "id"
            }
},
        courseId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: "cursos",
                key: "id_curso"
            }
        }
    });

    return Asignacion;
};
