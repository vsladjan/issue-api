module.exports = {
  development: {
    username: process.env.MYSQLDB_USER,
    password: process.env.MYSQLDB_ROOT_PASSWORD,
    database: process.env.MYSQLDB_DATABASE,
    host: process.env.MYSQLDB_HOST,
    port: process.env.MYSQLDB_DOCKER_PORT,
    dialect: 'mysql',
    dialectOptions: {
      bigNumberStrings: true
    }
  }
  
};