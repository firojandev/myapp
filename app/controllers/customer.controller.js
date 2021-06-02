const Customer = require('../models/customer.model');

exports.createCustomer = (req, res) => {

    if (Object.keys(req.body).length === 0) {

        res.status(400).send(
            {
                message: "Empt body request err!"
            }
        );
        return;
    }

    const customer = new Customer({
        email: req.body.email,
        name: req.body.name,
        active: req.body.active
    });

    Customer.create(customer, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Customer."
            });
        else res.send(data);
    });

};

exports.findAllCustomers = (req, res) => {
    Customer.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
    });
};

exports.findOne = (req, res) => {
    Customer.findById(req.params.customerId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.params.customerId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Customer with id " + req.params.customerId
          });
        }
      } else res.send(data);
    });
  };

