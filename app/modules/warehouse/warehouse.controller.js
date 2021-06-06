const dbseq = require('../../config/db.sequelize');

const Warehouse = dbseq.warehouse;

// Create and Save a new Warehouse
exports.create = (req, res) => {
    // Validate request
    if (Object.keys(req.body).length === 0) {
        res.status(400).send(
            {
                message: "Empty body request err!"
            }
        );
        return;
    }

    // Create a Tutorial
    const warehouse = {
        name: req.body.name,
        location: req.body.location,
        user_id: 2
    };

    // Save Tutorial in the database
    Warehouse.create(warehouse)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
};


// Retrieve all warehouse from the database.
exports.findAll = (req, res) => {
    Warehouse.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};