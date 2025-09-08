module.exports = {
  
    HOST: "ep-spring-union-a4nvuj13-pooler.us-east-1.aws.neon.tech",
    USER: "neondb_owner",
    PASSWORD: "npg_tnK3IO2zYcuZ",
    DB: "neondb",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};