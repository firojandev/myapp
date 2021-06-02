const User = require('../models/user.model');

exports.signup = (req, res) => {
    if (Object.keys(req.body).length === 0) {
        res.status(400).send(
            {
                message: "Empty body request err!"
            }
        );
        return;
    }

    const user = new User({
        email: req.body.email,
        name: req.body.name,
        password: req.body.password
    });

    User.create(user, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the user."
            });
        else res.send(data);
    });

};