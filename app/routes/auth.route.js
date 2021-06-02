const { signup, me } = require('../controllers/auth.controller');

const authRoute = (app) => {

    app.post('/auth/signup',signup);
    app.get('/auth/me',me);

}

module.exports = authRoute;