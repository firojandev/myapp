const { findAllCategory, createCategory, findOne, update, deleteCategory, deleteAll } = require("../controllers/category.controller");

const categoryRoute = (app) => {

    app.get('/category', findAllCategory);
    app.get('/category/:categoryId', findOne);
    app.post('/category', createCategory);
    app.put("/category/:categoryId", update);
    app.delete("/category/:categoryId",deleteCategory);
    app.delete("/category",deleteAll);

}

module.exports = categoryRoute;