const { findAllCategory, createCategory, findOne, update, deleteCategory, deleteAll } = require("../controllers/category.controller");
const verifyToken = require("../middleware/VerifyToken");

const categoryRoute = (app) => {

    app.get('/category',verifyToken,findAllCategory);
    app.get('/category/:categoryId',verifyToken, findOne);
    app.post('/category',verifyToken, createCategory);
    app.put("/category/:categoryId",verifyToken, update);
    app.delete("/category/:categoryId",verifyToken,deleteCategory);
    app.delete("/category",verifyToken,deleteAll);

}

module.exports = categoryRoute;