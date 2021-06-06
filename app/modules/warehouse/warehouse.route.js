const whc = require('./warehouse.controller');

const warehouseRoute = (app) => {
    // Retrieve all Warehouse
    app.get("/warehouses",whc.findAll);

    // Retrieve a Warehouse
    app.get("/warehouses/:id",whc.findById);

    // Create a new Warehouse
    app.post("/warehouses",whc.create);

    // Create a new Warehouse
    app.put("/warehouses/:id",whc.updateWarehouse);

    // delete Warehouse
    app.delete("/warehouses/:id",whc.deleteWarehouse);
}

module.exports = warehouseRoute;