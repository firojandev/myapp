const Sequelize = require('sequelize');
const dbconfig = require('./db.config');
const WarehouseModel = require('../modules/warehouse/warehouse.model')

const sequelize = new Sequelize(dbconfig.DB,dbconfig.USER,dbconfig.PASSWORD,{
    host:dbconfig.HOST,
    dialect:dbconfig.DIALECT,
    operatorsAliases: false,
    pool: {
        max: dbconfig.POOL.max,
        min: dbconfig.POOL.min,
        acquire: dbconfig.POOL.acquire,
        idle: dbconfig.POOL.idle,
    }

});

const dbseq = {};

dbseq.Sequelize = Sequelize;
dbseq.sequelize = sequelize;

dbseq.warehouse = WarehouseModel(sequelize,Sequelize);

module.exports = dbseq;