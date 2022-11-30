import { Sequelize } from "sequelize";
import initModels from './models/init-models.cjs';

class Db {

  constructor(){
    console.log("Sequelize init......");
    this.sequelize = new Sequelize(
      process.env.MYSQLDB_DATABASE, 
      process.env.MYSQLDB_USER, 
      process.env.MYSQLDB_ROOT_PASSWORD, 
      {
        host: process.env.MYSQLDB_HOST,
        dialect: 'mysql',
        port: process.env.MYSQLDB_DOCKER_POR,
        logging: false,
        operatorsAliases: 0,
        define: {
          timestamps: false,
          freezeTableName: true
        }, 
        pool: {
          max: 10,
          min: 0,
          acquire: 30000,
          idle: 10000
        }
      }
    );

    this.sequelize.sync().then(() => {
      console.log('Sync db');
    });

    this.models = initModels(this.sequelize);
  }
}

let db = new Db();

export default db;