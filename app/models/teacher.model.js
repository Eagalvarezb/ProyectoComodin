
module.exports=(sequelize, Sequelize)=>{ 

    const Teacher= sequelize.define("teacher", {
        teacherId : {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre : {
            type: Sequelize.STRING
        },
        email : {
            type: Sequelize.STRING
        },
        telefono : {
            type: Sequelize.STRING
        },
        direccion : {
            type: Sequelize.STRING
        },
        especialidad : {
            type: Sequelize.STRING
        },
        estado :{
            type: Sequelize.BOOLEAN
        }
    });
    Teacher.associate=(models)=>{
        Teacher.hasMany(models.cursos,{
            foreignKey: "teacherId",
            as:"cursos"
        });
    };
    return Teacher;
};