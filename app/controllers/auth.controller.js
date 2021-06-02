const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const config = require('../config/main.config');

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
        password: bcrypt.hashSync(req.body.password, 8)
    });

    User.create(user, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the user."
            });//else res.send(data);
        else {
            var token = jwt.sign({ id: data.id }, config.secret, {
                expiresIn: 86400 // expires in 24 hours
            });
            res.status(200).send({ auth: true, token: token });
        }
    });

};

exports.me = (req, res) => {
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, config.secret, function (err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
       User.findById(decoded.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");
        res.status(200).send(user);
      });
    });
};