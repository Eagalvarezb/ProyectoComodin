module.exports = {
  
    HOST: "ep-twilight-shadow-afoza55e-pooler.c-2.us-west-2.aws.neon.tech",
    USER: "neondb_owner",
    PASSWORD: "npg_YxMKHv6ZmBQ9",
    DB: "neondb",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};