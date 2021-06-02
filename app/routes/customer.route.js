const customersController = require('../controllers/customer.controller');

const customerRoute = (app) => {

    app.get('/customers', customersController.findAllCustomers);
    app.post('/customers', customersController.createCustomer);

    // Retrieve a single Customer with customerId
    app.get("/customers/:customerId", customersController.findOne);


}

module.exports = customerRoute;
