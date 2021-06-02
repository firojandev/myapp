const { findAllCategory, createCategory } = require("../controllers/category.controller");

const categoryRoute = (app) => {

    app.get('/category', findAllCategory);
    app.post('/category', createCategory);

}

module.exports = categoryRoute;