const connection = require('../config/db.connection');

const Category = function (category) {
    this.name = category.name;
    this.status = category.status;
};

Category.getAll = results => {
    connection.query('SELECT * from category', (err, res) => {
        if (err) {
            results(err, null);
            return;
        }
        results(null, res);
    });
}

Category.create = (newCategory, result) => {
    connection.query("INSERT INTO category SET ?", newCategory, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, { id: res.insertId, ...newCategory });
    });
};

module.exports = Category;