const { signup, me, login, logout } = require('../controllers/auth.controller');
const verifyToken = require('../middleware/VerifyToken');

const authRoute = (app) => {

    app.post('/auth/signup',signup);
    app.post('/auth/login',login);
    app.get('/auth/me',verifyToken,me);
    app.get('/auth/logout',logout);

}

module.exports = authRoute;