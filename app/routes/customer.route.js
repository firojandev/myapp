const customersController = require('../controllers/customer.controller');

const customerRoute = (app) => {

    app.get('/customers',customersController.findAllCustomers);
    app.post('/customers',customersController.createCustomer);
    
    

}

module.exports = customerRoute;
