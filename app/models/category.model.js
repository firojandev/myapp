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

Category.findById = (categoryId, result) => {
    connection.query(`SELECT * FROM category WHERE id = ${categoryId}`, (err, res) => {
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

Category.create = (newCategory, result) => {
    connection.query("INSERT INTO category SET ?", newCategory, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, { id: res.insertId, ...newCategory });
    });
};

Category.updateById = (id, category, result) => {
    connection.query(
        "UPDATE category SET name = ?, status = ? WHERE id = ?",
        [category.name, category.status, id],
        (err, res) => {
            if (err) {
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                result({ kind: "not_found" }, null);
                return;
            }
            result(null, { id: id, ...category });
        }
    );
};


Category.remove = (id, result) => {
    connection.query("DELETE FROM category WHERE id = ?", id, (err, res) => {
      if (err) {
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }

      result(null, res);
    });
  };


  Category.removeAll = result => {
    connection.query("DELETE FROM category", (err, res) => {
      if (err) {
        result(null, err);
        return;
      }
      result(null, res);
    });
  };

module.exports = Category;