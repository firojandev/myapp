const customersController = require('../controllers/customer.controller');

const customerRoute = (app) => {

    app.post('/customers',customersController.createCustomer);
    
    

}

module.exports = customerRoute;
