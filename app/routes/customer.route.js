const customersController = require('../controllers/customer.controller');

const customerRoute = (app) => {

    //Get all customers
    app.get('/customers', customersController.findAllCustomers);

    //Create a new customer
    app.post('/customers', customersController.createCustomer);

    // Retrieve a single Customer with customerId
    app.get("/customers/:customerId", customersController.findOne);

    // Update a Customer with customerId
    app.put("/customers/:customerId", customersController.update);

    // Delete a Customer with customerId
    app.delete("/customers/:customerId", customersController.delete);

    // Delete all Customers
    app.delete("/customers", customersController.deleteAll);

}

module.exports = customerRoute;
