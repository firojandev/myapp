const verifyToken = require('../../middleware/VerifyToken');
const whc = require('./warehouse.controller');

const warehouseRoute = (app) => {
    // Retrieve all Warehouse
    app.get("/warehouses",verifyToken, whc.findAll);

    // Retrieve a Warehouse
    app.get("/warehouses/:id",verifyToken,whc.findById);

    // Create a new Warehouse
    app.post("/warehouses",verifyToken,whc.create);

    // Create a new Warehouse
    app.put("/warehouses/:id",verifyToken,whc.updateWarehouse);

    // delete Warehouse
    app.delete("/warehouses/:id",verifyToken,whc.deleteWarehouse);
}

module.exports = warehouseRoute;