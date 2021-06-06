const dbconfig = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: '123456',
    DB: 'express_demo',
    DIALECT: "mysql",
    POOL: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

module.exports = dbconfig;