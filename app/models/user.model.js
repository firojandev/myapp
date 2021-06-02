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

module.exports = User;