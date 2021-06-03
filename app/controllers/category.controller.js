const Category = require('../models/category.model');

exports.findAllCategory = (req, res, next) => {
    Category.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving category."
            });
        else res.send(data);
    });
};

exports.findOne = (req, res) => {
    Category.findById(req.params.categoryId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Category with id ${req.params.categoryId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Category with id " + req.params.categoryId
                });
            }
        } else res.send(data);
    });
};

exports.createCategory = (req, res) => {

    if (Object.keys(req.body).length === 0) {

        res.status(400).send(
            {
                message: "Empty body request err!"
            }
        );
        return;
    }

    const category = new Category({
        name: req.body.name,
        status: req.body.status
    });

    Category.create(category, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the category."
            });
        else res.send(data);
    });

};

exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    Category.updateById(
        req.params.categoryId,
        new Category(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Category with id ${req.params.categoryId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating Category with id " + req.params.categoryId
                    });
                }
            } else res.send(data);
        }
    );
};

exports.deleteCategory = (req, res) => {
    Category.remove(req.params.categoryId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Category with id ${req.params.categoryId}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Category with id " + req.params.categoryId
                });
            }
        } else res.send({ message: `Category was deleted successfully!` });
    });
};

exports.deleteAll = (req, res) => {
    Category.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Category."
            });
        else res.send({ message: `All Category were deleted successfully!` });
    });
};


