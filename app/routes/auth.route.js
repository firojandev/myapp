const { signup } = require('../controllers/auth.controller');

const authRoute = (app) => {

    app.post('/auth/signup',signup);

}

module.exports = authRoute;