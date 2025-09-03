
module.exports=(sequelize, Sequelize)=>{ 

    const Cursos= sequelize.define("curso", {
        id_curso : {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        teacherId : {
            type : Sequelize.INTEGER
        },
        nombre : {
            type: Sequelize.STRING
        },
        codigo : {
            type: Sequelize.STRING
        },
        modalidad : {
            type: Sequelize.STRING
        },
        credito : {
            type: Sequelize.INTEGER
        }
    });

    Cursos.associate = (models)=>{
        Cursos.belongsTo(models.teacher, {
            foreingKey:"teacherId",
            as:"teacher"
        });
    };
    Cursos.associate=(models)=>{
        Cursos.ManyToMany(models.grado,{
            foreignKey:"id_curso",
            as:"grado"
        });
    };
    return Cursos;
};