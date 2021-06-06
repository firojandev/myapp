const whc = require('./warehouse.controller');

const warehouseRoute = (app) => {
    // Retrieve all Warehouse
    app.get("/warehouses",whc.findAll);

    // Create a new Tutorial
    app.post("/warehouses",whc.create);
}

module.exports = warehouseRoute;