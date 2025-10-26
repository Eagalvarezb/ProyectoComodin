module.exports = {
  
    HOST: "ep-small-hat-ad8we0xv-pooler.c-2.us-east-1.aws.neon.tech",
    USER: "neondb_owner",
    PASSWORD: "npg_SH9V7BAIbizT",
    DB: "neondb",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};