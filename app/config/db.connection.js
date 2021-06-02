const mysql = require('mysql');
const dbconfig = require('../config/db.config');

const connection = mysql.createConnection({
    host:dbconfig.HOST,
    database:dbconfig.DB,
    user:dbconfig.user,
    password:dbconfig.password
});

connection.connect(err => {
    if (err) throw err;
    console.log('Successfully connected to the database');
});

module.exports = connection;