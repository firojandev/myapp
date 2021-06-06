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

    // Create a Warehouse
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
                    err.message || "Some error occurred while creating the Warehouse."
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
                    err.message || "Some error occurred while retrieving Warehouse."
            });
        });
};

exports.findById = (req, res) => {
    const id = req.params.id;
    Warehouse.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Warehouse with id=" + id
            });
        });
};

exports.updateWarehouse = (req, res) => {
    const id = req.params.id;
    Warehouse.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Warehouse was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Warehouse with id=${id}. Maybe Warehouse was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Warehouse with id=" + id
            });
        });
};

exports.deleteWarehouse = (req, res) => {
    const id = req.params.id;

    Warehouse.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Warehouse was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Warehouse with id=${id}. Maybe Warehouse was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Warehouse with id=" + id
            });
        });

}