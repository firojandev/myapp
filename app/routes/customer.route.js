const customersController = require('../controllers/customer.controller');
const verifyToken = require('../middleware/VerifyToken');

const customerRoute = (app) => {

    //Get all customers
    app.get('/customers',verifyToken ,customersController.findAllCustomers);

    //Create a new customer
    app.post('/customers',verifyToken,customersController.createCustomer);

    // Retrieve a single Customer with customerId
    app.get("/customers/:customerId", verifyToken ,customersController.findOne);

    // Update a Customer with customerId
    app.put("/customers/:customerId",verifyToken,customersController.update);

    // Delete a Customer with customerId
    app.delete("/customers/:customerId",verifyToken,customersController.delete);

    // Delete all Customers
    app.delete("/customers",verifyToken,customersController.deleteAll);

}

module.exports = customerRoute;
