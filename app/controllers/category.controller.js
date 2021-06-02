const Category = require('../models/category.model');

exports.findAllCategory = (req, res) => {
    Category.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving category."
            });
        else res.send(data);
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

