const connection = require('../config/db.connection');

const User = function (user) {
    this.email = user.email;
    this.name = user.name;
    this.password = user.password;
};


User.create = (newUser, result) => {
    connection.query("INSERT INTO users SET ?", newUser, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, { id: res.insertId, ...newUser });
    });
};

User.findById = (id, result) => {
    connection.query(`SELECT id, email, name, status FROM users WHERE id = ${id}`, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        if (res.length) {
            result(null, res[0]);
            return;
        }
        result({ kind: "not_found" }, null);
    });
};

User.findByEmail = (email, result) => {
    connection.query(`SELECT id, email, password, name, status FROM users WHERE email = '${email}' AND status = 1 `, (err, res) => {
        if (err) {
            console.log(err);
            result(err, null);
            return;
        }
        if (res.length) {
            result(null, res[0]);
            return;
        }
        result({ kind: "not_found" }, null);
    });
};

module.exports = User;