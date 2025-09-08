const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

// Inicializamos Sequelize con los datos de conexión
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

// Objeto que agrupa todos los modelos
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//  Importación de modelos (uno por entidad del sistema)
db.students = require("./student.model.js")(sequelize, Sequelize);
db.teachers = require("./teacher.model.js")(sequelize, Sequelize);
db.courses = require("./curso.model.js")(sequelize, Sequelize);
db.grados = require("./grado.model.js")(sequelize, Sequelize);

//  Definición de relaciones

// Relación: Teacher -> Courses (un profesor imparte varios cursos)
db.teachers.hasMany(db.courses, { foreignKey: "teacherId", as: "cursos" });
db.courses.belongsTo(db.teachers, { foreignKey: "teacherId", as: "teacher" });

// Relación: Student -> Grados (un estudiante puede tener varias notas)
db.students.hasMany(db.grados, { foreignKey: "studentId", as: "grados" });
db.grados.belongsTo(db.students, { foreignKey: "studentId", as: "estudiante" });

// Relación: Course -> Grados (un curso puede tener muchas notas registradas)
db.courses.hasMany(db.grados, { foreignKey: "courseId", as: "grados" });
db.grados.belongsTo(db.courses, { foreignKey: "courseId", as: "curso" });

module.exports = db;